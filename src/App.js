// App.js
import React, { useState, useEffect } from "react";
import TaskList from "./Component/TaskList";
import TaskForm from "./Component/TaskForm";
import AnalyticsDashboard from "./Component/AnalyticsDashboard";

import {
  saveTasksToLocalStorage,
  getTasksFromLocalStorage
} from "./Utilities/LocalStorage";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = getTasksFromLocalStorage();
    setTasks(storedTasks);
  }, []);

  const addTask = (task) => {
    const existingTasks = getTasksFromLocalStorage();
    const updatedTasks = [...existingTasks, task];
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (updatedTask) => {
    const editedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(editedTasks);
    saveTasksToLocalStorage(editedTasks);
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        editTask={editTask}
      />
      <AnalyticsDashboard tasks={tasks} />
    </div>
  );
};

export default App;
