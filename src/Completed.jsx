



function playDeleteSound(){
  const audio = new Audio('/delete-button.mp3');
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
const lineStyle = {
  textDecoration: "line-through",
  color: "#262020",
  fontWeight: "normal"
}
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
  top: "0",
};

const Completed = ({ completedTodos , deleteTodo }) => {
  const safeTodos = Array.isArray(completedTodos) ? completedTodos : [];
  const nonNullCount = safeTodos.filter((t) => t != null).length; 

  return (
    <div style={completedContainerStyle}>
      <div style={styles}>
        <h2>Completed Todos <br />{`You have completed ${nonNullCount} tasks`}</h2>
      </div>
      {nonNullCount === 0 ? (
        <p style={{ fontSize: "18px", color: "#666" }}>No completed tasks yet.</p>
      ) : (
        safeTodos.map((todo, index) => (
          todo ? (
            <div key={index} style={taskContainerStyle}>
              <h3 style={lineStyle}><button type="button" style={deleteButtonStyle}  onClick={() => { deleteTodo(index); playDeleteSound(); }}>delete</button>{todo.title}</h3>
              <p style={lineStyle}>{todo.description}</p>
              <p style={lineStyle}><strong>Priority:</strong> {todo.priority}</p>
              <p style={lineStyle}><strong>Due Date:</strong> {todo.dueDate}</p>
            </div>
          ) : null
        ))
      )}
    </div>
  );
};

export default Completed;