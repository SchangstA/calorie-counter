export function Information() {

return (
    <>
        <form action="submit" className="information-form">
          <div className="age-div">
            <label htmlFor="age">
              Age
            </label>
            <input 
                type="text" 
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
              id='male-box'/>
            <label htmlFor="female-box">
              Female
            </label>
            <input 
              type="checkbox" 
              id='female-box'/>
          </div>
          <div className="height-div">
            <label htmlFor="height">
              Height
            </label>
            <input 
                type="text" 
                placeholder="CM"/>
          </div>
          <div className="weight-div">
            <label htmlFor="weight">
              Weight
            </label>
            <input 
                type="text" 
                placeholder="KG"/>
          </div>
          <button id="submit-btn">
            Submit
          </button>
        </form>
    </>
)
}