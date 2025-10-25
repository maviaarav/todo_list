import './App.css'
import SideManu from './side-menu.jsx'
import Completed from './Completed.jsx'
import Home from './home.jsx'
import Form from './form.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState, useEffect } from 'react'

const bodyStyle = {
  backgroundColor: "#F5F6F8",
  height: "100vh",
  display: "flex"
}

function App() {
  const [todos, setTodos] = useState([])  
  const [completedTodos, setCompletedTodos] = useState([])

  // 🧭 Load saved data from localStorage when app starts
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    const savedCompleted = localStorage.getItem("completedTodos");

    if (savedTodos) setTodos(JSON.parse(savedTodos));
    if (savedCompleted) setCompletedTodos(JSON.parse(savedCompleted));
  }, []);

  // 💾 Save todos whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 💾 Save completedTodos whenever they change
  useEffect(() => {
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [completedTodos]);

  // ➕ Add new todo
  const addTodo = (task) => {
    setTodos([...todos, task]);
  }

  // ✅ Mark todo as completed
  const completeTodo = (index) => {
    const completedTask = todos[index];
    setCompletedTodos([...completedTodos, completedTask]);
    setTodos(todos.filter((_, i) => i !== index)); 
  }

  // 🧭 Define routes
  const router = createBrowserRouter([
    { path: '/', element: <><SideManu /><Home todos={todos} completeTodo={completeTodo} /></> },
    { path: '/completed', element: <><SideManu /><Completed completedTodos={completedTodos} /></> },
    { path: '/form', element: <><SideManu /><Form addTodo={addTodo} /></> }
  ]);

  return (
    <div style={bodyStyle}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
