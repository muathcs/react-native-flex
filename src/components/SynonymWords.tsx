/**
 * INTERVIEW CHALLENGE: Interactive Synonym Explorer
 *
 * Build a word exploration tool that:
 * 1. Fetches synonyms for a user-entered word from an API
 * 2. Displays the list of synonyms with similarity scores
 * 3. Allows clicking on any synonym to explore its synonyms
 * 4. Shows loading state while fetching data
 * 5. Updates search input when synonym is clicked
 *
 * Requirements:
 * - Use custom hook for API calls
 * - Handle async operations with loading states
 * - Make synonym words clickable for recursive exploration
 * - Update both search term and results on click
 * - Handle API errors gracefully
 */

import React, { useEffect, useState } from "react";
import useGetSynonyms from "../hooks/useGetSynonyms";

interface synonymsResponse {
  word: string;
  score: number;
}

function SynonymWords() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { fetchSynonyms, synonyms, isLoading } = useGetSynonyms();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      fetchSynonyms(searchTerm);
    } catch (error: any) {
      console.log("error: ", error.message);
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="word-input">YOUR WORD</label>
        <input
          id="word-input"
          className="synonym-search"
          placeholder="search something"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button>Search</button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        synonyms.length > 0 && (
          <ul className="synonym-div ">
            {synonyms.map((syn) => (
              <li
                onClick={() => {
                  setSearchTerm(syn.word);
                  fetchSynonyms(syn.word);
                }}
                className="cursor-pointer"
                key={syn.word}
              >
                {syn.word}
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}

export default SynonymWords;
