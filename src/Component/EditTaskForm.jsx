import React, { useState } from "react";

const EditTaskForm = ({ task, editTask }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value, editing: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask({ ...updatedTask, editing: false });
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        value={updatedTask.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={updatedTask.description}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dueDate"
        value={updatedTask.dueDate}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Save</button>
    </form>
  );
};

export default EditTaskForm;
