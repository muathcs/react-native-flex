/**
 * INTERVIEW CHALLENGE: Event Registration Form with Validation
 *
 * Create a form that:
 * 1. Collects name, email, date, and time slot for an event
 * 2. Validates all fields before submission
 * 3. Ensures the date is in the future
 * 4. Shows error messages for invalid fields
 * 5. Displays success message after valid submission
 *
 * Requirements:
 * - Implement real-time validation
 * - Handle form state with controlled components
 * - Use useCallback for performance optimization
 * - Validate email format and required fields
 * - Prevent submission of invalid data
 */

import React, { useState, FormEvent, ChangeEvent, useCallback } from "react";

interface FormDataType {
  name: string;
  email: string;
  date: string;
  time: string;
}

interface FormErrors extends Partial<FormDataType> {}

type TimeOptions =
  | "Morning 8 am - 12pm"
  | "AFternoon 12 pm - 5pm"
  | "Evening 5 pm - 9pm";

function EventForm() {
  const [formData, setFormData] = useState<FormDataType>({
    date: "",
    email: "",
    name: "",
    time: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState<boolean>(false);

  const isFutureDate = useCallback((selectedDate: string): boolean => {
    const today = new Date();
    const selected = new Date(selectedDate);
    return selected > today;
  }, []);

  const handleInputChange = useCallback(
    (field: keyof FormDataType) =>
      (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      },
    []
  );

  const validateForm = useCallback((): boolean => {
    console.log("validating form");
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!isFutureDate(formData.date)) {
      newErrors.date = "Date must be in the future";
      isValid = false;
    }

    if (!formData.time) {
      newErrors.time = "Time is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData, isFutureDate]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();

      if (validateForm()) {
        console.log(formData);
        setSuccess(true);
      }
    },
    [formData, validateForm]
  );

  if (success) {
    return (
      <div className="success-message">
        <h1>Form has been submitted!</h1>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        className="event-form"
        style={{
          marginTop: 150,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          required
          value={formData.name}
          id="name"
          placeholder="Your name"
          onChange={handleInputChange("name")}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}

        <label htmlFor="email">Email</label>
        <input
          required
          id="email"
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleInputChange("email")}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <label htmlFor="date">Date</label>
        <input
          required
          type="date"
          id="date"
          value={formData.date}
          onChange={handleInputChange("date")}
          className={errors.date ? "error" : ""}
        />
        {errors.date && <span className="error-message">{errors.date}</span>}

        <label htmlFor="time">Time</label>
        <select
          required
          id="time"
          value={formData.time}
          onChange={handleInputChange("time")}
          className={errors.time ? "error" : ""}
        >
          <option value="" hidden>
            Select preferred time
          </option>
          <option>Morning 8 am - 12pm</option>
          <option>AFternoon 12 pm - 5pm</option>
          <option>Evening 5 pm - 9pm</option>
        </select>
        {errors.time && <span className="error-message">{errors.time}</span>}

        <button
          style={{
            background: "grey",
            padding: "5px 20px",
            borderRadius: 5,
            color: "white",
            cursor: "pointer",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EventForm;
