import React, { useState } from "react";
import { Link } from "react-router-dom";
import { taskContainerStyle } from './home.jsx'
import './form.css';



const containerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "auto",
  overflow: "scroll",
};
const styles ={
    padding: "15px",
    borderRadius: "15px",
    fontSize: "15px",
    border: "1px solid grey",
    margin: '20px 0 20px 0',

}
const select_style={
    padding: "15px",
    borderRadius: "15px",
    fontSize: "15px",
    margin: "20px 0 20px 0"
}
const two_element = {
    display: "flex",
    justifyContent: "space-between"
}


const Form = ({addTodo}) =>{
   const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("medium");
    const [dueDate, setDueDate] = useState("");

 const handleSave = () => {
        if(!title.trim()) return; 
        if(!description.trim()) return;
        const newTask = { title, description, priority, dueDate };   
        addTodo(newTask); 
    }
    function playSavebutton(){
    const audio = new Audio('/save-button.mp3');
    audio.play();
}
    return (
        <div style={containerStyle}>
            <div style={{fontSize: "32px", width: "100%", padding: "40px", gap: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }} > 
                <h2>Create New Task</h2>
                <p style={{fontSize: "18px", color: "#6B7280"}}>Fill in the details below to add a new task to your list.</p>
            </div>
            <div id="task-container">
                <p >Task Title *</p>
                <input style={styles} type="text" className="form-input" value={title} placeholder="e.g., Design the new dashboard" onChange={(e)=>setTitle(e.target.value)} required/>
                <p >Task Description *</p>
                <input style={styles} className="form-input" value={description} placeholder="Add a more detailed description of the task..." onChange={(e)=>setDescription(e.target.value)} required></input>
                <div>
                    <div className="form-group">
                        <label className="form-label">Priority *</label> <br />
                        <select className="form-select" style={select_style} defaultValue="medium" value={priority} onChange={(e)=>setPriority(e.target.value)} required>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label style= {select_style} className="form-label">Due Date</label> <br />
                        <input style={styles} type="date" className="form-input" value={dueDate} onChange={(e)=>setDueDate(e.target.value)}/>
                    </div>
                    </div>
                    <div>

                       <Link to="/"><button style={{ backgroundColor: !title || !description || !priority ? '#E5E7EB' : '#3B82F6', cursor: !title || !description || !priority ? 'not-allowed' : 'pointer'}} className="btn-1" onClick={()=>{playSavebutton(); handleSave();}} disabled={!title || !description || !priority }>Save task</button></Link>

                        <Link to="/"><button style={{ backgroundColor:"#F3F4F6", color:"#374151", border:"1px solid lightgrey"}} className="btn-1">Cancel</button></Link>
                    </div>
                    
            </div>

        </div>
    )
    
}


export default Form