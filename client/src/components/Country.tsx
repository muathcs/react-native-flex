/**
 * INTERVIEW CHALLENGE: Reusable Country Display Component
 *
 * Create a presentational component that:
 * 1. Receives country name and capital as props
 * 2. Displays them in a styled, consistent format
 * 3. Demonstrates component composition principles
 *
 * Requirements:
 * - Use TypeScript for prop typing
 * - Keep component simple and reusable
 * - Apply consistent styling
 */

import React from "react";

function Country({
  countryName,
  capitalName,
}: {
  countryName: string;
  capitalName: string;
}) {
  return (
    <div className="flex gap-2">
      <p className="border-2 border-black bg-gray-500 w-40 rounded-md my-2 py-2">
        {countryName}
      </p>
      <p className="border-2 border-black bg-gray-500 w-40 rounded-md my-2 py-2">
        {capitalName}
      </p>
    </div>
  );
}

export default Country;
