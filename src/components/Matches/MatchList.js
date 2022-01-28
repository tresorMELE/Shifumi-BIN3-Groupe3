import { useEffect, useState } from "react";
//import Game from "./Game";

function MatchList() {
  const [matchs, setMatchs] = useState();
  useEffect(() => {
    fetch("http://fauques.freeboxos.fr:3000/matches", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setMatchs(data));  
  }, []);
  
function rejoindrePartie(){
  <button onclick="rejoindre()">Rejoindre Une partie</button>
  window.location.href = './Game';
}

  return (
    <ul>
      {matchs === undefined && <span>Loading...</span>}
      {matchs?.length === 0 && <span>No data</span>}{"\n"}
      <button onClick={rejoindrePartie}>
        Rejoindre une partie
      </button>
      {matchs?.map((match) => (
        <li>{match._id}</li>
      ))}
    </ul>
  );
}

export default MatchList;