import React from 'react';
import TasksList from './components/TasksList';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>To-Do List</h1>
            <TasksList />
        </div>
    );
}

export default App;
