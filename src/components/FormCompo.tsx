import { SyntheticEvent, useState } from "react";
import { Mission } from "../types/missonType";
import style from "./FormCompo.module.css";
import axios from "axios";

const FormCompo = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setProirity] = useState("");
  const [task, setTask] = useState("");

  
  function handleForm(e: SyntheticEvent) {

    e.preventDefault();
    const currentTask: Mission = {
      name: name,
      priority: priority,
      status: status,
      description: task,
    };

    console.log(currentTask);
    axios
      .post("https://reactexambackend.onrender.com/missions/8187543/", currentTask)
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
    setName("");
    setProirity("");
    setStatus("");
    setTask("");
  }
  return (
    <form action="" className={style.container}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <select name="" id="" onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select name="" id="" onChange={(e) => setProirity(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="text"
        placeholder="Tech"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" onClick={(e) => handleForm(e)}>
        Add
      </button>
    </form>
  );
};

export default FormCompo;
