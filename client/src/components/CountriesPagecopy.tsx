/**
 * INTERVIEW CHALLENGE: Country Information Fetcher
 *
 * Create a component that:
 * 1. Fetches all countries from a REST API on component mount
 * 2. Displays country names and their capitals
 * 3. Implements a filter to show only Nordic countries (specific capitals)
 * 4. Handles loading and error states properly
 *
 * Requirements:
 * - Use useEffect for data fetching
 * - Handle async operations with proper error handling
 * - Filter data based on predefined capital cities
 * - Maintain immutability when updating state
 */

const BASE_URL = "https://restcountries.com/v3.1";
import React, { useEffect, useState } from "react";
import Country from "./Country";

//https://restcountries.com/v3.1/all

// https://restcountries.com/v3.1/capital/{capital}

const FILTERABLE_CAPITALS = [
  "Tallinn",
  "Helsinki",
  "Stockholm",
  "Oslo",
  "Copenhagen",
  "Reykjavik",
] as const;

type Capital = (typeof FILTERABLE_CAPITALS)[number];

interface Country {
  name: {
    common: string;
  };
  capital: string;
}

function CountriesPagecopy() {
  const [countries, setCountries] = useState<Country[]>([]);

  async function fetchCountries() {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital"
      );
      const data = await response.json();
      console.log("data: ", data);
      setCountries(data);
    } catch (error) {}
  }

  function filterNordicCapitals() {
    let tempArr = [...countries];

    tempArr = tempArr.filter((country) =>
      FILTERABLE_CAPITALS.includes(country.capital[0] as Capital)
    );

    setCountries(tempArr);
    console.log("temparr: ", tempArr);
  }

  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <div className="border-2 w-full h-full pt-20">
      <div className="bg-yellow-300">
        <button
          onClick={filterNordicCapitals}
          className="rounded-md px-5 py-2 cursor-pointer bg-blue-300"
        >
          Filter
        </button>
      </div>

      <div>
        {countries.map((country) => (
          <>
            <div className="flex justify-center gap-2 mt-2 bg-blue-300">
              <p className="" key={country.name.common}>
                {country.name.common}
              </p>
              <p className="">{country.capital}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default CountriesPagecopy;
