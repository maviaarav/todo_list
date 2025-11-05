import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import sideMenu from "./side-menu.jsx";
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
  marginTop: "10px",
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
const ClosedStyle = {
    /* margin-top: 20px; */
    margin: "20px",
    display: "flex",
    /* float: left; */
    position: "absolute",
    left: 0
}
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
      
function openMenu() {
    const menu = document.getElementById('menu');
    const closedButton = document.querySelector('.btn-closed');
    menu.style.display = "flex"

    if (menu.style.display === "flex") {
       console.log("menu is open");
       closedButton.style.display = "none";
    }
    
}
  return (
    <div style={containerStyle} id="container">
      <div>
        <button className="btn-closed" onClick={openMenu}>Menu</button>
      </div>
      
      {showConfetti && <Confetti />}
      <div style={styles} id="text-container">
        <h2>Today's Task <br />{`You have ${todos.length} tasks`}</h2>
        <Link to="/form"><button style={buttonStyle} id="btn-1" onClick={playSoundEffect}>+ New Task</button></Link>
      </div>

      {todos.length === 0 ? (
        <p style={{ fontSize: "18px", color: "#666" }}>No tasks yet. Add one!</p>
      ) : (
        todos.map((todo, index) => (
          <div key={index} style={taskContainerStyle} className="task-container">
            <div style={{ width: "25px",
                height: "25px",
                borderRadius: "20%",
                display: "inline-block",
                marginRight: "10px",
                backgroundColor: todo.priority === "high" ? "#ff4d6d" : todo.priority === "medium" ? "#e36414" : "#74c69d"
              }}>

            </div>
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