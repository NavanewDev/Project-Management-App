import {useState} from 'react';

export default function NewTask({addTask}) {
    const [taskInput, setTaskInput] = useState('');

    function handleInput(event) {
        setTaskInput(event.target.value);
    }

    function handleClick() {
        if(taskInput.trim() === '') {
            return;
        }
        addTask(taskInput)
        setTaskInput('');        
    }

    return (
        <div className="flex items-center gap-4">
            <input onChange={handleInput} value={taskInput} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )
}