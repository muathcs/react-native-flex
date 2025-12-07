/**
 * INTERVIEW CHALLENGE: Traffic Light Simulator
 *
 * Build an automatic traffic light that:
 * 1. Cycles through red → yellow → green → red
 * 2. Each light stays on for a specific duration (e.g., 2 seconds)
 * 3. Only one light is active at a time
 * 4. Transitions happen automatically using intervals
 * 5. Properly cleans up timers on component unmount
 *
 * Requirements:
 * - Use useRef to manage interval reference
 * - Implement state machine for light transitions
 * - Clear previous interval before setting new one
 * - Visual distinction between active and inactive lights
 * - Handle component lifecycle properly
 */

import React, { useEffect, useRef, useState } from "react";

const LIGHTS = ["red", "green", "yellow"] as const;

type lightType = (typeof LIGHTS)[number];
function StopLight() {
  const [activeTrafficLight, setActiveTrafficLight] =
    useState<lightType>("red");
  let trafficLightInterval = useRef<NodeJS.Timeout>();

  async function handleTrafficLight() {
    console.log("traffic: ", activeTrafficLight);
    if (trafficLightInterval.current) {
      clearInterval(trafficLightInterval.current);
    }
    switch (activeTrafficLight) {
      case "green":
        console.log("inside green");
        setActiveTrafficLight("green");
        trafficLightInterval.current = setInterval(() => {
          setActiveTrafficLight("red");
        }, 2000);
        break;
      case "red":
        setActiveTrafficLight("red");
        trafficLightInterval.current = setInterval(() => {
          setActiveTrafficLight("yellow");
        }, 2000);
        break;
      case "yellow":
        setActiveTrafficLight("yellow");
        trafficLightInterval.current = setInterval(() => {
          setActiveTrafficLight("green");
        }, 2000);
        break;
    }
  }

  useEffect(() => {
    console.log("Effect ruxnning");
    return () => console.log("Cleaning up");
  }, []); // No dependency array

  //   useEffect(() => {
  //     handleTrafficLight();

  //     return () => {
  //       if (trafficLightInterval.current) {
  //         clearInterval(trafficLightInterval.current);
  //       }
  //     };
  //   }, [activeTrafficLight]);

  return (
    <div>
      <h1>Stop light</h1>
      <div className="flex flex-col justify-center items-center">
        {LIGHTS.map((colour, index) => (
          <p
            style={{
              background: colour == activeTrafficLight ? colour : "grey",
            }}
            className="border-2 rounded-full w-10 h-10 "
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default StopLight;
