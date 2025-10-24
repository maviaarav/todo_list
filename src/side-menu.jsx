import React from "react";
import { Link } from "react-router-dom";
import './side-menu.css';

const styles = {
    width : "300px",
    height: "100vh",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
    fontSize: "20px",
}
const linkStyle = {
    textDecoration: "none",
    padding: "10px 15px",
    borderRadius: "20px",
    width: "100%",
    textAlign: "center",
    top: "10px",
}
const clicked = (event) => {
    const links = document.querySelectorAll('.side_menu');
    links.forEach(link =>{
        link.classList.remove('active');
    })
    event.currentTarget.classList.add("active");
}

const sideMenu = () => {
    return (
        <>
            <div style={styles}>
                <h2 style={{fontSize: "32px", fontWeight: "bold"}}>Task Manager</h2>
                <Link to="/" style={linkStyle} onClick={clicked} className="side_menu">All Tasks</Link>
                <Link to="/completed" style={linkStyle} onClick={clicked} className="side_menu">Completed</Link>
            </div>
        </>
    )
}
export default sideMenu;