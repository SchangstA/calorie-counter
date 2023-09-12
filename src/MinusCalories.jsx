import { useState } from "react";

export function MinusCal({ updateCount }) {
    const [minus,setMinus] = useState("")

    const handleMinus = ({target:{value}}) => setMinus(value)
  
    function minusCount() {
      const inputValue = parseFloat(minus);
    
      if (!isNaN(inputValue)) {
        updateCount((prevCount) => prevCount - inputValue);
      }
      setMinus("");
    }

    return (
    <><div>
        <div>
          <button onClick={minusCount} className='minus-btn'>
            Subtract
          </button>
        </div>
        <input
          value={minus}
          onChange={handleMinus}
          name="name"
          id='cal-input'
        />
      </div>
    </>
    )
}
    