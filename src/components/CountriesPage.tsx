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

function CountriesPage() {
  const [countries, setCountries] = useState<Country[]>([]);

  async function fetchCountries() {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital"
      );
      const parsedResponse = await response.json();
      setCountries(parsedResponse);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  function filterByCapital() {
    let newArr = [...countries];

    newArr = newArr.filter((country) => {
      return (
        country.capital &&
        FILTERABLE_CAPITALS.includes(country.capital[0] as Capital)
      );
    });

    const testMap = countries.map((country) => {
      if (country.capital == "Oslo") {
        console.log("match: ", country);
      }
    });

    setCountries(newArr);

    console.log("countries: ", newArr);
  }

  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <div>
      <div>
        <button
          onClick={filterByCapital}
          className="border-2 border-black rounded-md py-6 bg-green-500 px-2 cursor-pointer"
        >
          Filter by Capital
        </button>
      </div>
      {countries.map((country, index) => (
        <div className="flex gap-2 justify-center">
          <Country
            capitalName={country.capital}
            countryName={country.name.common}
          />
        </div>
      ))}
    </div>
  );
}

export default CountriesPage;
