import React, { useState } from 'react'

function UseStateWithArraysHooks() {

    const [nums, setNums] = useState([1, 2, 3]);
    
    const addNums = () => {
        setNums([...nums, nums.length + 1]);
    }

    const removeNums = () => {
        setNums(
            nums.filter((item, idx) => {
                return idx !== nums.length -1;
            })
        )
    }

    return (
        <div>
            <button onClick={addNums}>Add item</button>
            <button onClick={removeNums}>Remove item</button>
            <ul>
                {nums.map(num => <li key={num}>{num}</li>)}
            </ul>

        </div>
    )
}

export default UseStateWithArraysHooks