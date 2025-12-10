/**
 * INTERVIEW CHALLENGE: Image Carousel with Auto-Play
 *
 * Create an image slider that:
 * 1. Displays one image at a time from a collection
 * 2. Has Previous/Next buttons for manual navigation
 * 3. Includes Play button to auto-advance every second
 * 4. Includes Stop button to pause auto-play
 * 5. Loops back to start when reaching the end
 *
 * Requirements:
 * - Manage interval with useRef to prevent memory leaks
 * - Disable Previous at first image, Next at last image
 * - Clean up intervals on component unmount
 * - Handle auto-play start/stop functionality
 * - Use TypeScript for type safety
 */

import React, { useEffect, useRef, useState } from "react";
import { splitVendorChunkPlugin } from "vite";

// Use descriptive constant names and add type safety
const IMAGE_URLS = [
  "https://picsum.photos/id/237/300/400",
  "https://picsum.photos/id/10/300/400",
  "https://picsum.photos/id/20/300/400",
] as const;

const CONTROL_BUTTONS = ["Prev", "Next", "play", "stop"] as const;

// Better type definitions using TypeScript features
type ControlButton = (typeof CONTROL_BUTTONS)[number];
type ImageUrl = (typeof IMAGE_URLS)[number];
function ImgSlider() {
  // Use more descriptive variable names
  const [currentIndex, setCurrentIndex] = useState<number>(() =>
    Math.floor(Math.random() * IMAGE_URLS.length)
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Simplified play function with better logic
  function handleAutoPlay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (!isPlaying) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < IMAGE_URLS.length - 1 ? prevIndex + 1 : 0
      );
    }, 1000);
  }

  // Better type safety and simplified logic
  function handleActions(action: ControlButton) {
    switch (action) {
      case "Next":
        setCurrentIndex((prevIndex) =>
          prevIndex >= IMAGE_URLS.length - 1 ? prevIndex : prevIndex + 1
        );
        break;
      case "Prev":
        setCurrentIndex((prevIndex) =>
          prevIndex <= 0 ? prevIndex : prevIndex - 1
        );
        break;
      case "play":
        setIsPlaying(true);
        break;
      case "stop":
        setIsPlaying(false);
        break;
      default:
        // This ensures type safety - if a new action is added to ControlButton
        // TypeScript will error if we don't handle it here
        const exhaustiveCheck: never = action;
        throw new Error(`Unhandled action: ${exhaustiveCheck}`);
    }
  }

  console.log("cur: ", intervalRef);
  // Cleanup interval on component unmount and handle autoplay
  useEffect(() => {
    handleAutoPlay();
    return () => {
      if (intervalRef.current) {
        console.log("clearning interval");
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: 20,
      }}
    >
      <div>
        <img src={IMAGE_URLS[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 10,
        }}
      >
        {CONTROL_BUTTONS.map((button) => (
          <button
            onClick={() => handleActions(button)}
            style={{
              border: 1,
              background: "gray",
              borderRadius: 5,
              padding: 10,
              marginInline: 2,
              cursor: "pointer",
            }}
            key={button}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImgSlider;
