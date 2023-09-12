import { useState } from "react";

export function AddCal({ updateCount }) {
    const [add,setAdd] = useState("")

    const handleAdd = ({target:{value}}) => setAdd(value)
  
    function addCount() {
      const inputValue = parseFloat(add);
    
      if (!isNaN(inputValue)) {
        updateCount((prevCount) => prevCount + inputValue);
      }
      setAdd("");
    }

    return (
    <>
      <div>
        <div>
          <button onClick={addCount} className='add-btn'>
            Add
          </button>
        </div>
        
        <input
          value={add}
          onChange={handleAdd}
          name="name"
          id='cal-input'
        />
      </div>      
    </>
    )
}
    