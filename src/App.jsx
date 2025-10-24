import './App.css'
import SideManu from './side-menu.jsx'
import Completed from './Completed.jsx'
import Home from './home.jsx'
import Form from './form.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState } from 'react'

const bodyStyle = {
  backgroundColor: "#F5F6F8",
  height: "100vh",
  display: "flex"
}

function App() {
  const [todos, setTodos] = useState([])  
  const [completedTodos, setCompletedTodos] = useState([])

  const addTodo = (task) => {
    setTodos([...todos, task])
  }

  const completeTodo = (index) => {
    const completedTask = todos[index];
    setCompletedTodos([...completedTodos, completedTask]);
    setTodos(todos.filter((_, i) => i !== index)); 
  }

  const router = createBrowserRouter([
    { path: '/', element: <><SideManu /><Home todos={todos} completeTodo={completeTodo} /></> },
    { path: '/completed', element: <><SideManu /><Completed completedTodos={completedTodos} /></> },
    { path: '/form', element: <><SideManu /><Form addTodo={addTodo} /></> }
  ])

  return (
    <div style={bodyStyle}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
