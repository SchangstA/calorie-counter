import React from "react";

export function Form({ inputs, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="information-form">
      <div className="age-div">
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          required
          value={inputs.age || ""}
          onChange={handleChange}
          placeholder="15-80"
          id="age"
        />
      </div>
      <div className="gender-div">
        <label htmlFor="gender">Gender</label>
        <label htmlFor="male-box">Male</label>
        <input
          type="checkbox"
          name="gender"
          checked={inputs.gender === "male"}
          onChange={handleChange}
          id="male-box"
        />
        <label htmlFor="female-box">Female</label>
        <input
          type="checkbox"
          name="gender"
          checked={inputs.gender === "female"}
          onChange={handleChange}
          id="female-box"
        />
      </div>
      <div className="height-div">
        <label htmlFor="height">Height</label>
        <input
          type="text"
          name="height"
          required
          value={inputs.height || ""}
          onChange={handleChange}
          placeholder="CM"
        />
      </div>
      <div className="weight-div">
        <label htmlFor="weight">Weight</label>
        <input
          type="text"
          name="weight"
          required
          value={inputs.weight || ""}
          onChange={handleChange}
          placeholder="KG"
        />
      </div>
      <button id="submit-btn">Submit</button>
    </form>
  );
}