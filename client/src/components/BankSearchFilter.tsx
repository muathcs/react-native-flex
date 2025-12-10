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

function BankSearchFilter() {
  const [search, setSearch] = useState<string>("");
  const [visibleBranches, setVisibleBranches] = useState<Branch[]>();
  const uniqueCities = [
    ...new Set(
      branches.map((branch) => {
        return branch.city;
      })
    ),
  ];

  useEffect(() => {
    handleSearch();
  }, [search]);

  function handleSearch() {
    setVisibleBranches(
      branches
        .filter(
          (branch) =>
            branch.city.includes(search) ||
            branch.code.includes(search) ||
            branch.name.includes(search)
        )
        .sort((a, b) => a.name.localeCompare(b.name))
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
      }}
    >
      <h1>branch</h1>

      <div
        style={{
          width: 250,
          display: "flex",
          gap: 5,
        }}
      >
        <label htmlFor="search">Search</label>
        <input
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          id="search"
        />
        <select
          onChange={(e) => {
            const selectedCity = e.target.value.trim().toLowerCase(); // Normalize selected value
            const tempArr = branches.filter(
              (branch) => branch.city.trim().toLowerCase() === selectedCity // Normalize branch city
            );
            console.log("Filtered branches:", tempArr);
            setVisibleBranches(tempArr);
          }}
        >
          {uniqueCities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>
      </div>

      <div
        style={{
          width: 250,
        }}
      >
        {visibleBranches?.map((branch, index) => (
          <>
            <p
              onClick={() => {
                alert(
                  visibleBranches[index].name +
                    visibleBranches[index].city +
                    visibleBranches[index].code
                );
              }}
              style={{
                cursor: "pointer",
                marginTop: 5,
                border: "2px solid black",
                alignSelf: "flex-start",
              }}
              key={branch.code}
            >
              {branch.name}
            </p>
          </>
        ))}
      </div>
    </div>
  );
}

export default BankSearchFilter;
