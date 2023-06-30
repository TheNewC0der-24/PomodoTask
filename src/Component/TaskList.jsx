// TaskList.js
import React from "react";
import EditTaskForm from "./EditTaskForm";

const TaskList = ({
  tasks,
  setTasks,
  deleteTask,
  toggleTaskCompletion,
  editTask
}) => {
  const handleEdit = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, editing: !task.editing } : task
      )
    );
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          {task.editing ? (
            <EditTaskForm task={task} editTask={editTask} />
          ) : (
            <div>
              <p>{task.title}</p>
              <p>{task.description}</p>
              <span></span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
              <button onClick={() => handleEdit(task.id)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
