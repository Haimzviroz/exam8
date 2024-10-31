import { useState, useEffect } from "react";
import axios from "axios";
import { Mission } from "../types/missonType";
import MissionCard from "./MissionCard";
import FormCompo from './FormCompo'
import styles from './missionCompo.module.css'

const baseUrl = "https://reactexambackend.onrender.com/missions/8187543/";
const MissonCompo = () => {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    // Fetch todos from the backend
    axios.get<Mission[]>(baseUrl).then((response) => {
      setMissions(response.data);
    });
  }, []);

  return (
    <div className={styles.conatainer}>
      <h1>Military Operations Dashboard</h1>
      <FormCompo />
      <h2>Missions</h2>

      {missions.map((mission) => (
        <MissionCard mission={mission} />
      ))}
    </div>
  );
};

export default MissonCompo;
