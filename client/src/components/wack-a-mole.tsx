/**
 * INTERVIEW CHALLENGE: Whack-a-Mole Game
 *
 * Build the classic arcade game where:
 * 1. 9 holes displayed in a 3x3 grid
 * 2. One mole appears randomly in a hole
 * 3. Mole position changes every second
 * 4. Click on the mole to score a point
 * 5. Clicking empty holes doesn't affect score
 *
 * Requirements:
 * - Use interval to randomize mole position every second
 * - Display different images for mole vs empty hole
 * - Track and display score
 * - Validate clicks (only count if mole is present)
 * - Clean up interval on unmount
 * - Handle rapid position changes smoothly
 */

import React, { useEffect, useState, useRef } from "react";
import wack from "../../public/wack.jpg";
import mole from "../../public/mole.jpg";

type wackBoard = 0 | 1;
const STARTING_MAP: wackBoard[] = [0, 0, 0, 1, 0, 0, 0, 0, 0];
function WackAMole() {
  const [wackBoard, setWackBoard] = useState<wackBoard[]>(STARTING_MAP);
  const [score, setScore] = useState<number>(0);

  let intervalIdRef = useRef<NodeJS.Timeout>();
  function positionWack() {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }

    let newArr = [...wackBoard].sort(() => Math.random() - 0.5);

    setWackBoard(newArr);
    // console.log("wack: ", wackBoard);
    // setWackBoard(newArr);
  }

  function handleWack(index: number) {
    const correctClick = wackBoard[index] == 1;
    if (correctClick) {
      setScore((score) => score + 1);
    }
  }

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      positionWack();
    }, 1000);
  }, [wackBoard]);

  return (
    <div>
      <h1 className="relative top-5 text-4xl">Score:{score}</h1>
      <div className="grid grid-cols-3 mx-40 my-20">
        {wackBoard.map((item, index) => (
          <div
            onClick={() => handleWack(index)}
            key={crypto.randomUUID()}
            className="col-span-1 border-2 border-black cursor-pointer"
          >
            <img className="w-full h-[250px]" src={item == 0 ? mole : wack} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WackAMole;
