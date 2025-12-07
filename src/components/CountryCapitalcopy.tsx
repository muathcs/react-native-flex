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
function CountryCapitalcopy({ data }: { data: Record<string, string> }) {
  const [countries, setCountries] = useState(Object.keys(data));
  const [capitals, setCapitals] = useState(Object.values(data));

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCapital, setSelectedCapital] = useState<string>("");

  useEffect(() => {
    setCapitals(capitals.sort(() => Math.random() - 0.5));
    setCountries(countries.sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    if (selectedCountry && selectedCapital) {
      if (data[selectedCountry] == selectedCapital) {
        console.log("answer is correct");
        setCapitals(capitals.filter((capital) => capital !== selectedCapital));
        setCountries(
          countries.filter((country) => country !== selectedCountry)
        );
      } else {
        setSelectedCapital("");
        setSelectedCountry("");
        console.log("wrong");
      }
    }
  }, [selectedCapital, selectedCountry]);

  return (
    <div className="border-2 w-full h-full flex justify-center items-center gap-10">
      <div className="flex gap-2 mt-20 mb-20">
        <div>
          {countries.map((country) => (
            <p
              onClick={() => {
                setSelectedCountry(country);
                console.log("countyr: ", country);
              }}
              className={`border ${
                selectedCountry == country ? "bg-blue-500" : "bg-blue-100"
              }  rounded-md cursor-pointer p-4`}
              key={country}
            >
              {country}
            </p>
          ))}
        </div>
        <div>
          {capitals.map((capital) => (
            <p
              onClick={() => {
                setSelectedCapital(capital);
              }}
              className={`border ${
                selectedCapital == capital ? "bg-blue-500" : "bg-blue-100"
              } rounded-md cursor-pointer p-4
            `}
              key={capital}
            >
              {capital}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountryCapitalcopy;
