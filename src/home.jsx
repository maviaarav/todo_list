import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

import Confetti from 'react-confetti';



const containerStyle = {
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

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "20px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#35e188ff",
  color: "#086249ff",
  cursor: "pointer",
  height: "50px",
  textAlign: "center",
};

export const taskContainerStyle = {
  fontSize: "18px",
  width: "90%",
  padding: "20px",
  backgroundColor: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  borderRadius: "20px",
  margin: "10px auto",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
};

const Home = ({ todos, completeTodo }) => {
  const [showConfetti, setShowConfetti] = useState(false);
      function playSoundEffect() {
        const audio = new Audio("/work_done.mp3");
        audio.play();
      }
      const triggerSound = (duration = 15000) =>{
        setShowConfetti(true);
        setTimeout(()=>{
          setShowConfetti(false);
        }, duration);
      }
      
      
  return (
    <div style={containerStyle}>
      {showConfetti && <Confetti />}
      <div style={styles}>
        <h2>Today's Task <br />{`You have ${todos.length} tasks`}</h2>
        <Link to="/form"><button style={buttonStyle} id="btn-1" onClick={playSoundEffect}>+ New Task</button></Link>
      </div>

      {todos.length === 0 ? (
        <p style={{ fontSize: "18px", color: "#666" }}>No tasks yet. Add one!</p>
      ) : (
        todos.map((todo, index) => (
          <div key={index} style={taskContainerStyle} className="task-container">
            <h3>
              <input 
                type="checkbox" 
                className="checkBox" 
                role="switch"
                onChange={(e) => {
                  if (e.target.checked) {
                    completeTodo(index);
                  }
                }}
              />
              <input 
                type="checkbox" 
                className="checkBox" 
                role="switch"
                onChange={(e) => {
                  if (e.target.checked) {
                    completeTodo(index);
                  }
                }}
                onClick={() =>{
                  playSoundEffect();
                  triggerSound();
                }}
              />
              {todo.title}
            </h3>
            <p>{todo.description}</p>
            <p><strong>Priority:</strong> {todo.priority}</p>
            <p><strong>Due Date:</strong> {todo.dueDate}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
