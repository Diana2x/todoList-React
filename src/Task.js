const Task = (props) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.completed ? "#DFFFD8" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>x</button>
    </div>
  );
};

export default Task;
