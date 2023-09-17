import React, { useState } from "react";

export function Information() {
  const [inputs, setInputs] = useState({
    age: "",
    gender: false,
    height: "",
    weight: ""
  });
  const [caloricMaintenance, setCaloricMaintenance] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
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
        <form onSubmit={handleSubmit} className="information-form">
          <div className="age-div">
            <label htmlFor="age">
              Age
            </label>
            <input 
                type="text"
                name="age"
                required
                value={inputs.age || ""}
                onChange={handleChange} 
                placeholder="15-80" 
                id="age"/>
          </div>
          <div className="gender-div">
            <label htmlFor="gender">
              Gender
            </label>
            <label htmlFor="male-box">
              Male
            </label>
            <input 
              type="checkbox"
              name="male"
              checked={inputs.male}
              onChange={handleChange} 
              id='male-box'/>
            <label htmlFor="female-box">
              Female
            </label>
            <input 
              type="checkbox" 
              name="female"
              checked={inputs.female || ""}
              onChange={handleChange}
              id='female-box'/>
          </div>
          <div className="height-div">
            <label htmlFor="height">
              Height
            </label>
            <input 
                type="text"
                name="height"
                required
                value={inputs.height || ""} 
                onChange={handleChange}
                placeholder="CM"/>
          </div>
          <div className="weight-div">
            <label htmlFor="weight">
              Weight
            </label>
            <input 
                type="text"
                name="weight"
                required
                value={inputs.weight || ""}
                onChange={handleChange} 
                placeholder="KG"/>
          </div>
          <button id="submit-btn">
            Submit
          </button>
        </form>
        ) : (
        <div id="submission-message">
          <h1>Caloric Maintenance</h1>
        </div>
      )}
      {submitted && (
          <div>
            <h1 id="result-container">
              {caloricMaintenance !== null ? caloricMaintenance : ""}
            </h1>
          </div>
      )}
    </>
  );
}