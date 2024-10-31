import styles from "./MissionCard.module.css";
import { Mission } from "../types/missonType";
import axios from "axios";

interface props {
  mission: Mission;
}

const MissionCard = ({ mission }: props) => {
  const handlClickdelete = () => {
    axios
      .delete(
        `https://reactexambackend.onrender.com/missions/8187543/${mission._id}`
      )
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlClickProgres = () => {
    axios
      .post(
        `https://reactexambackend.onrender.com/missions/8187543/progrs/${mission._id}`
      )
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div
      key={mission._id}
      className={styles.container}
      style={
        mission.status == " In Progress"
          ? { backgroundColor: "red" }
          : { backgroundColor: "orange" }
      }
    >
      <div className={styles.card}>
        <h3>Name: {mission.name}</h3>
        <p>status: {mission.status}</p>
        <p>priority: {mission.priority}</p>
        <p>description: {mission.description}</p>
      </div>
      <div>
        <button
          onClick={() => {
            handlClickdelete();
          }}
        >
          Delete
        </button>
        <button className={styles.progres} onClick={() => {handlClickProgres}}>Progres</button>
      </div>
    </div>
  );
};

export default MissionCard;
