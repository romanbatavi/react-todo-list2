import React, {useState} from 'react'

function TodoForm() {
    const [input, setInput] = useState('')
    
    return (
        <form className="todo-form">
            <input type="text" placeholder="Add Here" value={input} name="text" className='todo-input'/>
            <button className="todo-button">Add Todo</button>
        </form>
    )
}

export default TodoForm
