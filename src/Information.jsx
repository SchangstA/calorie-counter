import React, { useState } from "react";
import { Form } from "./Form";
import { Result } from "./Results";

export function Information() {
  const [inputs, setInputs] = useState({
    age: "",
    gender: "",
    height: "",
    weight: ""
  });
  const [caloricMaintenance, setCaloricMaintenance] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox" ? (event.target.checked ? "male" : "female") : event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Extract values from the inputs object or default to 0 if not provided
    const { age, gender, height, weight } = inputs;
    const ageValue = parseFloat(age) || 0;
    const heightValue = parseFloat(height) || 0;
    const weightValue = parseFloat(weight) || 0;

    // Calculate caloric maintenance equation
    const result = 10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5;

    // Update caloric maintenance state and set submitted to true
    setCaloricMaintenance(result);
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <Form inputs={inputs} handleChange={handleChange} handleSubmit={handleSubmit} />
      ) : (
        <Result caloricMaintenance={caloricMaintenance} />
      )}
    </>
  );
}