import { useState } from "react";

function AddTask(props) {
  const { handleAddTasks, newId } = props;

  const addTaskHandler = (event) => {
    event.preventDefault();

    const newTaskObject = {
      task_name: toDo,
      id: newId,
    };
    //console.log(newTaskObject)\
    handleAddTasks(newTaskObject);
    setToDo("");
  };
  // declaration for the new task
  const [toDo, setToDo] = useState("");
  return (
    <div className="addTask">
      <form onSubmit={addTaskHandler}>
        <input
          value={toDo}
          placeholder="Add Task Here"
          onChange={(event) => setToDo(event.target.value)}
          required
        ></input>
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
