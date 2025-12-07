/**
 * INTERVIEW CHALLENGE: Click Tracker with Undo/Redo
 *
 * Create an interactive canvas where:
 * 1. User can click anywhere to place a marker at that position
 * 2. Each click records the X and Y coordinates
 * 3. Undo button removes the last placed marker
 * 4. Redo button restores previously undone markers
 * 5. Placing a new marker clears the redo history
 *
 * Requirements:
 * - Track click coordinates (clientX, clientY)
 * - Maintain history for undo/redo functionality
 * - Disable undo when no markers exist
 * - Disable redo when no undone actions exist
 * - Position markers at exact click locations
 * - Clear redo stack when new marker is placed
 */

import React, { act, useState } from "react";

type Plot = {
  x: number;
  y: number;
};
function PointerGame() {
  const [plots, setPlots] = useState<Plot[]>([]);
  const [poppedPlots, setPoppedPlots] = useState<Plot[]>([]);

  // handle undo and redo.
  function handleUndoAndRedo(action: "back" | "forward"): void {
    if (action === "back" && plots.length > 0) {
      console.log("back...");
      let newArr: Plot[] = [...plots];
      const popped = newArr.pop();

      setPlots(newArr);
      setPoppedPlots([...poppedPlots, popped] as Plot[]);
      return;
    } else if (action === "forward" && poppedPlots.length > 0) {
      let poppedTempArr = [...poppedPlots];
      const popped = poppedTempArr.pop();

      setPoppedPlots(poppedTempArr);
      setPlots([...plots, popped] as Plot[]);
    }
  }

  return (
    <div
      onClick={(e) => {
        setPlots([...plots, { x: e.clientX, y: e.clientY }]);
        setPoppedPlots([]);
      }}
      className="border-2 w-full h-[100vh] bg-gray-800 cursor-pointer"
    >
      <h1
        style={{
          color: "white",
        }}
      >
        PointerGame [{plots.length}]
      </h1>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex gap-2 ml-2 top-10 z-10 "
      >
        <button
          disabled={plots.length == 0}
          onClick={() => handleUndoAndRedo("back")}
        >
          back
        </button>
        <button
          disabled={poppedPlots.length == 0}
          onClick={() => handleUndoAndRedo("forward")}
        >
          forward
        </button>
      </div>
      {plots.map((plot, index) => (
        <p
          key={index}
          style={{
            position: "absolute",
            left: plot.x - 10,
            top: plot.y - 10,
          }}
        >
          O
        </p>
      ))}
    </div>
  );
}

export default PointerGame;
