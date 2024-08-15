import React from "react";

const TaskItem = ({ task, toggleComplete, deleteTask, setTaskToEdit }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
      </button>
      <button onClick={() => setTaskToEdit(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
