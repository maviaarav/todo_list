import React, { useState } from "react";
import { Link } from "react-router-dom";
import { taskContainerStyle } from './home.jsx'
import './form.css';
import { useLocation, useNavigate } from "react-router-dom";



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
    const location = useLocation();
const navigate = useNavigate();

const editingTodo = location.state?.todo;
const editingIndex = location.state?.index;

const isEditMode = Boolean(editingTodo);
  const [title, setTitle] = useState(editingTodo?.title || "");
const [description, setDescription] = useState(editingTodo?.description || "");
const [priority, setPriority] = useState(editingTodo?.priority || "medium");
const [dueDate, setDueDate] = useState(editingTodo?.dueDate || "");


const handleSave = () => {
  if (!title.trim() || !description.trim()) return;

  const taskData = { title, description, priority, dueDate };

  if (isEditMode) {
    addTodo(taskData, editingIndex); // update existing
  } else {
    addTodo(taskData); // create new
  }

  navigate("/");
};

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

                       <Link to="/"><button
  className="btn-1"
  onClick={() => {
    playSavebutton();
    handleSave();
  }}
  style={{
    backgroundColor: !title || !description ? "#E5E7EB" : "#3B82F6",
    cursor: !title || !description ? "not-allowed" : "pointer"
  }}
  disabled={!title || !description}
>
  {isEditMode ? "Update Task" : "Save Task"}
</button>
</Link>

                        <Link to="/"><button style={{ backgroundColor:"#F3F4F6", color:"#374151", border:"1px solid lightgrey"}} className="btn-1">Cancel</button></Link>
                    </div>
                    
            </div>

        </div>
    )
    
}


export default Form