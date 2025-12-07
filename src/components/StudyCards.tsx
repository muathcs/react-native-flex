/**
 * INTERVIEW CHALLENGE: Spaced Repetition Flashcard System
 *
 * Create a study tool that:
 * 1. Displays flashcards one at a time with question and answer
 * 2. Shows questions randomly without repeats in a session
 * 3. Users rate difficulty (Easy/Medium/Hard) after seeing answer
 * 4. Tracks which cards have been seen and total progress
 * 5. Allows navigation back to previous cards
 * 6. Ends when all unique cards have been shown once
 *
 * Requirements:
 * - Implement random card selection from unseen cards
 * - Track seen cards using Set for O(1) lookups
 * - Maintain navigation history for back button
 * - Show session statistics (cards completed, cards remaining)
 * - Display optional explanations with answers
 * - Prevent showing same card twice in one session
 */

import React, { useState } from "react";
import {
  DSA_PRINCIPLES_QUESTIONS,
  DSA_QUESTIONS,
  HTTP_QUESTIONS,
  NEXT_JS_QUESTIONS,
  NODE_JS_EASY_QUESTIONS,
  NODE_JS_QUESTIONS,
  OOP_QUESTIONS,
  OOP_QUESTIONSTS,
  REACT_QUESTIONS,
  TYPESCRIPT_QUESTIONS,
} from "../constants/questions";

interface FlashCard {
  id: number;
  question: string;
  answer: string;
  difficulty: number; // 1-3, where 3 is most difficult
  nextShowTime: number;
  explanation?: string;
}

function StudyCards() {
  const [cards, setCards] = useState<FlashCard[]>(TYPESCRIPT_QUESTIONS);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionsCompleted, setQuestionsCompleted] = useState(0); // Questions completed this session
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0); // Total questions ever answered
  const [seenCardIds, setSeenCardIds] = useState<Set<number>>(
    new Set([NEXT_JS_QUESTIONS[0].id])
  );
  const [cardHistory, setCardHistory] = useState<number[]>([0]); // Track card index history
  const [historyIndex, setHistoryIndex] = useState(0); // Track current position in history

  const moveToNextCard = () => {
    // Get list of cards we haven't seen this session
    const unseenCards = cards.filter((card) => !seenCardIds.has(card.id));

    // If there are unseen cards, show one of them
    if (unseenCards.length > 0) {
      const randomIndex = Math.floor(Math.random() * unseenCards.length);
      const cardIndex = cards.findIndex(
        (card) => card.id === unseenCards[randomIndex].id
      );
      setCurrentCardIndex(cardIndex);
      const newHistory = [...cardHistory.slice(0, historyIndex + 1), cardIndex];
      setCardHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
      setSeenCardIds((prev) => new Set([...prev, cards[cardIndex].id]));
    }

    // If all cards have been seen once, don't move to next card
    // User can only navigate through history at this point
  };

  const moveToPreviousCard = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setCurrentCardIndex(cardHistory[historyIndex - 1]);
      setShowAnswer(false);
    }
  };

  const handleDifficultyRating = (difficulty: number) => {
    const updatedCards = [...cards];
    const currentCard = updatedCards[currentCardIndex];

    // Set next show time based on difficulty (in minutes)
    const delayMinutes = difficulty === 1 ? 5 : difficulty === 2 ? 3 : 1;
    currentCard.nextShowTime = Date.now() + delayMinutes * 60 * 1000;
    currentCard.difficulty = difficulty;

    setCards(updatedCards);
    setShowAnswer(false);
    setQuestionsCompleted((prev) => prev + 1);
    setTotalQuestionsAnswered((prev) => prev + 1);

    moveToNextCard();
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const allCardsShown = seenCardIds.size === cards.length;

  return (
    <div className="min极h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Flash Cards</h2>
            <div className="text-sm text-gray-600">
              <div>Session: {questionsCompleted}</div>
              <div>
                Unique Cards Seen: {seenCardIds.size}/{cards.length}
              </div>
              {allCardsShown && (
                <div className="text-green-600 font-semibold">
                  All cards have been shown!
                </div>
              )}
            </div>
          </div>

          <div className="min-h-[200px] border-2 border-gray-200 rounded-lg p-6 mb-4">
            <div className="text-center space-y-4">
              <p className="text-lg font-medium text-gray-900">
                {cards[currentCardIndex].question}
              </p>
              {showAnswer && (
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-lg text-gray-700">
                    {cards[currentCardIndex].answer}
                  </p>
                  {cards[currentCardIndex].explanation && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">
                        {cards[currentCardIndex].explanation}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {!showAnswer ? (
            <div className="space-y-2">
              <button
                onClick={handleShowAnswer}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Show Answer
              </button>
              <button
                onClick={moveToPreviousCard}
                disabled={historyIndex === 0}
                className={`w-full py-2 rounded-md cursor-pointer ${
                  historyIndex === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gray-500 hover:bg-gray-600 text-white"
                }`}
              >
                Previous Question
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleDifficultyRating(1)}
                  className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors cursor-pointer"
                  disabled={allCardsShown}
                >
                  Easy
                </button>
                <button
                  onClick={() => handleDifficultyRating(2)}
                  className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition-colors cursor-pointer"
                  disabled={allCardsShown}
                >
                  Medium
                </button>
                <button
                  onClick={() => handleDifficultyRating(3)}
                  className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors cursor-pointer"
                  disabled={allCardsShown}
                >
                  Hard
                </button>
              </div>
              <button
                onClick={moveToPreviousCard}
                disabled={historyIndex === 0}
                className={`w-full py-2 rounded-md ${
                  historyIndex === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gray-500 hover:bg-gray-600 text-white"
                }`}
              >
                Previous Question
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudyCards;
