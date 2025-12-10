/**
 * INTERVIEW CHALLENGE: Bank Branch Search & Filter
 *
 * Build a branch locator that allows users to:
 * 1. Search branches by name, city, or branch code
 * 2. Filter branches by selecting a city from a dropdown
 * 3. Display matching branches sorted alphabetically by name
 * 4. Show branch details when clicking on a branch
 *
 * Requirements:
 * - Implement real-time search as user types
 * - Dropdown should show unique cities only
 * - Results should update immediately on search or filter change
 * - Handle case-insensitive searching
 */

import React, { useEffect, useState } from "react";

interface Branch {
  name: string;
  city: string;
  code: string;
}

const branches: Branch[] = [
  { name: "Downtown Branch", city: "New York", code: "NY001" },
  { name: "Wall Street Branch", city: "New York", code: "NY002" },
  { name: "Sunset Branch", city: "Los Angeles", code: "LA001" },
  { name: "Silicon Valley Branch", city: "San Francisco", code: "SF001" },
  { name: "Hollywood Branch", city: "Los Angeles", code: "LA002" },
];

function BankSearchFilterCopy() {
  const [filteredBranches, setFilteredBranches] = useState<Branch[]>(branches);
  const [SelectedCity, setSelectedCity] = useState<string>("");

  function filterBranches(input: string) {
    console.log("input: ", input);
    let temparr = [...branches];

    temparr = temparr.filter(
      (branch) =>
        branch.name.toLocaleLowerCase().includes(input) || branch.city == input
    );

    console.log("temparr");

    setFilteredBranches(temparr);
  }

  return (
    <div className="border-2 h-[100vh] flex flex-col items-center pt-10">
      <div>
        <input
          onChange={(e) => {
            console.log("e.target.value: ", e.target.value);
            filterBranches(e.target.value);
          }}
          type="text"
        />

        <div>
          {filteredBranches.map((branch) => (
            <p key={branch.code}>{branch.name}</p>
          ))}
        </div>
      </div>

      {/* dropdown */}
      <div>
        <select
          onChange={(e) => {
            filterBranches(e.target.value);
            setSelectedCity(e.target.value);
          }}
        >
          {Array.from(new Set(branches.map((b) => b.city))).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default BankSearchFilterCopy;
