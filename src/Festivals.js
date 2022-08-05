import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs ,query, where} from "firebase/firestore";
import Festival from "./Festival";

function Festivals() {
  const [festivals, setFestivals] = useState([]);
  const [continent, setContinent] = useState("Europe")

  useEffect(() => {
    setFestivals([]);
    async function getFestivals() {
      console.log("hi");
      const q = query(collection(db, "festivals"), where("continent", "==", continent));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setFestivals((current) => [...current, doc.data()]);
      });
    }
    getFestivals();
  }, [continent]);

  function handleChange(e){
    setContinent(e.target.value)

  }

  return (
    <div>
      <div className="continent_container">
        <label htmlFor="continent" className="label">Choose a continent:</label>
        <select name="continent" id="continent" onChange={handleChange}>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Australia">Australia</option>
        </select>
      </div>
    <div className="festivals_container">
      
      {festivals.map((festival, i) => {
        return (
          <Festival
            key={i}
            country={festival.country}
            name={festival.name}
            text={festival.text}
            img={festival.img}
            url={festival.url}
          />
        );
      })}
    </div>
    </div>
  );
}

export default Festivals;
