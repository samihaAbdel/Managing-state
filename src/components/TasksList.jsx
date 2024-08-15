import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

const TasksList = () => {
  const [tasks, setTasks] = useState([
    {
      id: Math.random(),
      name: "Chess Club",
      description: "Session 14-16",
      completed: false,
    },
  ]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (name, description) => {
    const newTask = {
      id: Math.random(),
      name,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, name, description) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, name, description } : task
    );
    setTasks(updatedTasks);
    setTaskToEdit(null);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            setTaskToEdit={setTaskToEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
