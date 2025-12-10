/**
 * INTERVIEW CHALLENGE: Country-Capital Matching Game
 *
 * Build an interactive matching game where:
 * 1. Users match countries with their capitals by clicking two buttons
 * 2. Correct matches remove both buttons from the board
 * 3. Wrong matches highlight both buttons in red temporarily
 * 4. All options are displayed in random order
 *
 * Requirements:
 * - Track selection state (DEFAULT, SELECTED, WRONG)
 * - Validate matches using the data object provided
 * - Handle both directions: country→capital and capital→country
 * - Clear selections after each attempt
 * - Shuffle options on initial render
 */

import React, { useEffect, useRef, useState } from "react";

type ButtonState = "DEFAULT" | "SELECTED" | "WRONG";
type Option = {
  value: string;
  state: ButtonState;
};
function CountryCapital({ data }: { data: Record<string, string> }) {
  const countries = Object.keys(data);
  const capitals = Object.values(data);
  const [selected, setSelected] = useState<Option>();

  const [options, setOptions] = useState<Option[]>(
    [...countries, ...capitals].map((value) => ({
      value,
      state: "DEFAULT",
    }))
  );

  console.log("options: ", options);

  useEffect(() => {
    console.log("here");
    options.sort(() => Math.random() - 0.5);
  }, []);
  //
  return (
    <div className=" ">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => {
            if (!selected) {
              setSelected(option);
              setOptions(
                options.map((opt) => {
                  return opt === option
                    ? {
                        ...opt,
                        state: "SELECTED",
                      }
                    : opt;
                })
              );
            } else {
              //

              if (
                data[selected.value] == option.value ||
                selected.value == data[option.value]
              ) {
                setOptions(
                  options.filter(
                    (opx) =>
                      opx.value != selected.value && opx.value != option.value
                  )
                );
              } else {
                setOptions(
                  options.map((opt) => {
                    console.log("option: ", opt);
                    console.log("option2: ", selected);
                    return opt.value === option.value ||
                      opt.value === selected.value
                      ? {
                          ...opt,
                          state: "WRONG",
                        }
                      : opt;
                  })
                );
              }
              setSelected(undefined);
            }
          }}
          className={` border-2 border-black w-40 py-5 rounded-md ${
            option.state == "SELECTED"
              ? "bg-blue-400"
              : option.state == "WRONG"
              ? "bg-red-500"
              : ""
          }`}
        >
          {option.value}
        </button>
      ))}
    </div>
  );
}

export default CountryCapital;
