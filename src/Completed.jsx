import React from "react";

import delete_sound from "/Users/Home/todo/Todo_list/src/save-button.mp3";

function playDeleteSound(){
  const audio = new Audio(delete_sound);
  audio.play();
}

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
const deleteButtonStyle = {
  padding: "5px 10px",
  fontSize: "14px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "rgb(255, 77, 77)",
  color: "rgb(255, 255, 255)",
  alignSelf: "flex-start",
  float: "right",
  display: "block",
  position: "relative",
  top: "90px",
};

const Completed = ({ completedTodos , deleteTodo }) => {
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
            <h3><button type="button" style={deleteButtonStyle}  onClick={() => { deleteTodo(index); playDeleteSound(); }}>delete</button>{todo.title}</h3>
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
