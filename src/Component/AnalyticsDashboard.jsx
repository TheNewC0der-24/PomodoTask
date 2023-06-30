// AnalyticsDashboard.js
import React from "react";

const AnalyticsDashboard = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed);
  const remainingTasks = tasks.filter((task) => !task.completed);
  const productivityRate =
    tasks.length > 0 ? (completedTasks.length / tasks.length) * 100 : 0;

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <p>Completed Tasks: {completedTasks.length}</p>
      <p>Remaining Tasks: {remainingTasks.length}</p>
      <p>Productivity Rate: {productivityRate.toFixed(2)}%</p>
    </div>
  );
};

export default AnalyticsDashboard;
