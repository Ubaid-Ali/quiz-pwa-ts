import React, { useState } from 'react'
import './Starter.css'


type Inp = {
    amount: number,
    difficulty: string
}

const Starter: React.FC<any> = (inputCallback) => {

    const [userInput, setUSerInput] = useState({ amount: 0, difficulty: '' });

    const onchangeHandler = (e: any) => {
        let { name, value } = e.target;
        // console.log('name',name);
        // console.log('value',value);
        setUSerInput((prev) => {
            return (
                {
                    ...prev,
                    [name]: value
                }
            )
        })
    }

    // inputCallback(userInput);
    console.log(userInput)

    return (
        <div className='starter'>
            <form action="">

                <div>
                    <label>Question Request</label>
                    <input name='amount' value={userInput.amount} onChange={onchangeHandler} type="number" />
                </div>

                <div>
                    <label>Difficulty</label>
                    <select name="difficulty" id="difficulty" onChange={onchangeHandler} >
                        <option value="easy">EASY</option>
                        <option value="medium">MEDIUM</option>
                        <option value="hard">HARD</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Starter;