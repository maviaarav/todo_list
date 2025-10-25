import './App.css'
import SideManu from './side-menu.jsx'
import Completed from './Completed.jsx'
import Home from './home.jsx'
import Form from './form.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const bodyStyle = {
  backgroundColor: "#F5F6F8",
  height: "100vh",
  display: "flex"
}

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const isInitialLoad = useRef(true); 


  useEffect(() => {
    try {
      const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      const savedCompleted = JSON.parse(localStorage.getItem("completedTodos")) || [];

      console.log("Loaded todos (once):", savedTodos);
      console.log("Loaded completedTodos (once):", savedCompleted);

      if (Array.isArray(savedTodos)) setTodos(savedTodos);
      if (Array.isArray(savedCompleted)) setCompletedTodos(savedCompleted);
    } catch (error) {
      console.error("Error loading localStorage:", error);
    }
  }, []);

  useEffect(() => {
    if (isInitialLoad.current) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  useEffect(() => {
    if (isInitialLoad.current) return;
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [completedTodos]);

  useEffect(() => {
    isInitialLoad.current = false;
  }, []);

  const addTodo = (task) => {
    setTodos((prev) => [...prev, task]);
  };

  const deleteTodo = (index) => {
    setCompletedTodos((prev) => prev.filter((_, i) => i !== index));
  };

  const completeTodo = (index) => {
    const completedTask = todos[index];
    setCompletedTodos((prev) => [...prev, completedTask]);
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  const router = createBrowserRouter([
    { path: '/', element: <><SideManu /><Home todos={todos} completeTodo={completeTodo} /></> },
    { path: '/completed', element: <><SideManu /><Completed completedTodos={completedTodos} deleteTodo={deleteTodo} /></> },
    { path: '/form', element: <><SideManu /><Form addTodo={addTodo} /></> }
  ]);

  return (
    <div style={bodyStyle}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
