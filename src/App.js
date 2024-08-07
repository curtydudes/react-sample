import { useState } from "react";
import "./App.css";
import logo from "./assets/images/dinnerDaddyLogo.png";
import SearchBar from "./components/SearchBar/SearchBar";
import User from "./components/User/User";
import bankUsers from "./assets/data/bankUsers.json";
import data from "./assets/data/task-list.json";
import AddTask from "./components/AddTask";

function App() {
  //useState

  // array destructuring
  // [value/variable, function to update the value/variable]
  // useState can accept string, number, array
  // right now string to get user input
  // what is inside the useState is the expected data type
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  // holder of result
  const [result, setResult] = useState("");

  // mimics
  // const setNum1 = function() {    }

  // change state of num1
  //event signifies the changes in the input changes
  const handleNum1Change = (event) => {
    setNum1(event.target.value);
    console.log(num1);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
    console.log(num2);
  };

  // adding functionality to the buttons
  const handleAddition = () => {
    let sum = Number(num1) + Number(num2); //typecasting string into numbers
    setResult(sum);
  };
  const handleSubtraction = () => {
    let sub = Number(num1) - Number(num2); //typecasting string into numbers
    setResult(sub);
  };
  const handleMultiplication = () => {
    let mul = Number(num1) * Number(num2); //typecasting string into numbers
    setResult(mul);
  };
  const handleDivision = () => {
    let div = Number(num1) / Number(num2); //typecasting string into numbers
    setResult(div);
  };

  // break

  // task list

  const [tasks, setTasks] = useState(data); //data is an array of objects/tasks
  const handleTasks = (newTask) => {
    //newTask - task that will be added to our tasks state
    // tasks.push(newTask)
    // prevTasks - existing tasks in our array
    // [...prevtasks] - creates new array that contains previous task and newly created tasks and gives back to tasks state
    // setTasks - responsible for assigning the new array to tasks
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  // break

  const bankEmployee = {
    name: "Yael",
    balance: 10000,
    email: "spongecola@gmail.com",
  };

  const address = {
    houseNo: 74,
    street: "Manila Street",
    country: "Philippines",
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* img src="./assets/image/logo.png" */}
      <img src={logo} alt="logo"></img>
      <SearchBar></SearchBar>
      {/* <SearchBar/> */}
      <User employee={bankEmployee} address={address}></User>
      {bankUsers.map((bankUsers) => {
        return (
          <div key={bankUsers.id}>
            {bankUsers.name} {bankUsers.balance}
          </div>
        );
      })}

      <div className="calculator">
        <h1>Simple Calculator</h1>
        <label>Num 1:</label>
        <input type="number" onChange={handleNum1Change}></input>
        <label>Num 2:</label>
        <input type="number" onChange={handleNum2Change}></input>
        <br />
        <button onClick={handleAddition}> Add</button>
        <button onClick={handleSubtraction}>Subtract</button>
        <button onClick={handleMultiplication}>Multiply</button>
        <button onClick={handleDivision}>Divide</button>
        <br />
        <h1>Result: {result}</h1>
      </div>

      <div className="taskList">
        {/* to display the tasks --> mapping objects to the array then showing it as content as html */}
        {tasks.map((task) => {
          return <div key={task.id}>{task.task_name}</div>;
        })}
      </div>
      <AddTask handleAddTasks={handleTasks} newId={tasks.length}></AddTask>
    </div>
  );
}

export default App;
