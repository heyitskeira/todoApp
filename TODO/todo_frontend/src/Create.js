import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const Create = () => {
    const [task, setTask] = useState('');
    const [dueDate, setDueDate] = useState('');

    const createTask = () => {
        if (!task.trim()) return;  // Optional: Prevent empty tasks
        axios.post('http://localhost:5000/add', { task: task.trim(), dueDate })  // Include dueDate in the body
            .then(result => {
                console.log(result.data);
                window.location.reload();  // Reload to fetch updated list
                setTask('');
                setDueDate('');  // Clear dueDate after adding
            })
            .catch(err => console.log(err));
    };

    return (
        <main>
            <h1>Todo List</h1>
            <div className='create-form'>
                <input
                    type='text'
                    placeholder='Enter a task'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    required
                />
                <input
                    type='date'
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />  {/* New date input */}
                <button onClick={createTask}>ADD</button>
            </div>
        </main>
    );
};

export default Create;
