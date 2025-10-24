import React from "react";

const completedContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "auto",
  alignItems: "center",
  overflow: "scroll"
};

const styles = {
  display: "flex",
  fontSize: "32px",
  alignItems: "center",
  width: "100%",
  padding: "40px",
  justifyContent: "space-between",
};

export const taskContainerStyle = {
  fontSize: "18px",
  width: "90%",
  padding: "20px",
  backgroundColor: "rgba(218, 255, 218, 1)",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  borderRadius: "20px",
  margin: "10px auto",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
};

const Completed = ({ completedTodos }) => {
  return (
    <div style={completedContainerStyle}>
      <div style={styles}>
        <h2>Completed Todos <br />{`You have completed ${completedTodos.length} tasks`}</h2>
      </div>
      {completedTodos.length === 0 ? (
        <p style={{ fontSize: "18px", color: "#666" }}>No completed tasks yet.</p>
      ) : (
        completedTodos.map((todo, index) => (
          <div key={index} style={taskContainerStyle}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p><strong>Priority:</strong> {todo.priority}</p>
            <p><strong>Due Date:</strong> {todo.dueDate}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Completed;
