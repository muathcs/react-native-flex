/**
 * INTERVIEW CHALLENGE: Memory Matching Game
 *
 * Build a classic memory game where:
 * 1. Cards are displayed face-down in a grid
 * 2. User flips two cards at a time
 * 3. If cards match, they stay revealed
 * 4. If cards don't match, they flip back after a delay
 * 5. Game continues until all pairs are found
 *
 * Requirements:
 * - Randomize card positions on initialization
 * - Prevent interaction during card comparison
 * - Track which cards have been matched
 * - Implement flip animation delay for wrong guesses
 * - Handle edge cases (clicking same card twice, clicking during pause)
 */

import React, { useState } from "react";

interface Icons {
  icon: string;
  hidden: boolean;
  id: number;
  guessed: boolean;
}

const GUESSES = [
  {
    icon: "😂",
    hidden: true,
    guessed: false,
    id: 1,
  },
  {
    icon: "🐦",
    hidden: true,
    guessed: false,
    id: 2,
  },
  {
    icon: "💻",
    hidden: true,
    guessed: false,
    id: 3,
  },
  {
    icon: "✔️",
    hidden: true,
    guessed: false,
    id: 4,
  },
  {
    icon: "😂",
    hidden: true,
    guessed: false,
    id: 5,
  },
  {
    icon: "🐦",
    hidden: true,
    guessed: false,
    id: 6,
  },
  {
    icon: "💻",
    hidden: true,
    guessed: false,
    id: 7,
  },
  {
    icon: "✔️",
    hidden: true,
    guessed: false,
    id: 8,
  },
];

function GuessingGame() {
  const [boxes, setBoxes] = useState<Icons[]>(
    [...GUESSES].sort(() => Math.random() - 0.5)
  );

  const [hasGuess, setHasGuess] = useState(false);
  const [pause, setPause] = useState(false);

  function resetGuesses() {
    let newArr = [...boxes];

    newArr.map((box) => {
      box.hidden = true;
    });

    setBoxes(newArr);
  }

  function removeOption(id1: number, id2: number): void {
    let newArr = [...boxes];

    newArr.map((box) => {
      if (box.id === id1 || box.id === id2) {
        box.guessed = true;
      }
    });
  }

  async function handleBoxClicked(id: number) {
    // make icons visible.
    const newArr = boxes.map((box) => {
      if (box.id === id) {
        return { ...box, hidden: false };
      }
      return box;
    });

    if (hasGuess) {
      const filtered = newArr.filter((box) => box.hidden === false); // these are the two guesses. max it can be is 2 objects.
      const correctGuess = filtered[0].icon === filtered[1].icon; // checking if guess 1 is equal to guess 2
      setPause(true);
      if (correctGuess) {
        removeOption(filtered[0].id, filtered[1].id);
      }

      await setTimeout(() => {
        resetGuesses();
        setPause(false);
      }, 1000);
    }
    setHasGuess((hasGuess) => !hasGuess);
    setBoxes(newArr);
    // resetGuesses();
  }

  return (
    <div className="h-[100vh] w-full flex justify-center items-center border-2 flex-col">
      <h1>Guessing game</h1>
      <div className="border-2 w-96 h-96 grid grid-cols-2 ">
        {boxes.map((box) => (
          <button
            onClick={() => {
              if (pause || box.guessed) return;
              handleBoxClicked(box.id);
            }}
            key={box.id}
            className="border-2 bg-green-400 border-black col cursor-pointer rounded-md m-1  "
          >
            {`${!box.hidden || box.guessed ? `${box.icon}` : ""}`}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GuessingGame;
