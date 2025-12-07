/**
 * INTERVIEW CHALLENGE: Color Guessing Game
 *
 * Create a game where:
 * 1. A random color is displayed as a box
 * 2. Three hex code options are shown as buttons
 * 3. User must identify which hex code matches the displayed color
 * 4. Show immediate feedback (correct/wrong)
 * 5. Generate new color on correct answer
 *
 * Requirements:
 * - Generate random hex colors programmatically
 * - Randomize button order
 * - Validate user selection
 * - Provide visual feedback for results
 * - Reset game after correct answer
 */

import React, { useEffect, useState } from "react";

enum ResultEnum {
  CORRECT,
  WRONG,
}
function GuessColour() {
  const [currentColour, setCurrentColour] = useState<string>("");
  const [result, setResult] = useState<ResultEnum | undefined>(undefined);
  const [options, setOptions] = useState<string[]>([
    currentColour,
    createRandomColour(),
    createRandomColour(),
  ]);

  function createRandomColour() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  useEffect(() => {
    generateColours();
  }, []);

  function checkAnswer(answer: string) {
    if (answer && answer == currentColour) {
      setResult(ResultEnum.CORRECT);
      generateColours();
    } else {
      setResult(ResultEnum.WRONG);
    }
  }

  function generateColours() {
    const newColour = createRandomColour();
    setCurrentColour(newColour);
    setOptions(
      [newColour, createRandomColour(), createRandomColour()].sort(
        () => Math.random() - 0.5
      )
    );
  }

  //
  return (
    <div className="flex justify-center items-center h-[100vh]  ">
      <div className="flex flex-col">
        <div
          className={`border-2  w-80 h-80`}
          style={{
            backgroundColor: currentColour,
          }}
        />
        <div className=" h-20 mt-10">
          {options.map((option) => (
            <button
              onClick={() => checkAnswer(option)}
              className="bg-gray-400 mx-2 w-20 py-3 rounded-md border-1 cursor-pointer"
            >
              {option}
            </button>
          ))}
        </div>
        <div>
          <p
            style={{
              color: result == ResultEnum.CORRECT ? "green" : "red",
            }}
          >
            {result == undefined
              ? ""
              : result == ResultEnum.CORRECT
              ? "correct answer"
              : "Wrong answer"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GuessColour;
