/**
 * INTERVIEW CHALLENGE: Numeric Passcode Entry System
 *
 * Build a passcode input interface that:
 * 1. Provides a number pad (0-9) for input
 * 2. Displays the entered digits in an input field
 * 3. Only accepts numeric input (filter out non-digits)
 * 4. Validates against a predefined correct password
 * 5. Shows success message on correct entry
 *
 * Requirements:
 * - Create clickable number buttons for input
 * - Allow both button clicks and keyboard input
 * - Sanitize input to allow only numbers
 * - Validate password on submission
 * - Display appropriate feedback
 */

import React, { useState } from "react";

const CORRECT_PASSWORD = "4313";
function Passcode() {
  const [inputPassword, setInputPassword] = useState<string>("");
  const [successful, setSuccessful] = useState(false);

  function handlePasswordAttempt() {
    if (inputPassword === CORRECT_PASSWORD) {
      setSuccessful(true);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div>
        {successful ? (
          <p>success</p>
        ) : (
          <>
            <input
              value={inputPassword}
              //   type="password"
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setInputPassword(value);
              }}
              style={{
                border: "2px solid black",
              }}
            />
            <button
              onClick={handlePasswordAttempt}
              style={{
                backgroundColor: "green",
                borderRadius: 5,
                padding: 5,
                marginLeft: 5,
                color: "white",
                cursor: "pointer",
              }}
            >
              submit
            </button>
          </>
        )}
      </div>
      <div>
        {Array.from({ length: 10 }, (_, i) => i).map((number) => (
          <button
            onClick={() =>
              setInputPassword((inputPassword) => (inputPassword += number))
            }
            style={{
              border: "2px solid black",
              borderRadius: 100,
              padding: 10,
              marginInline: 2,
              cursor: "pointer",
            }}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Passcode;
