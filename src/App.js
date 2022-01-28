import logo from "./logo.png";
import "./App.css";
import Button from "./components/lib/Button";
import Table from "./components/lib/Table";
import Collapse from "./components/lib/Collapse";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import UserList from "./components/UserManager/UserList";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./components/Security/Login";
import MatchList from "./components/Matches/MatchList";
import Logout from "./components/Security/Logout";
import Game from "./components/Matches/Game";

function App() {
  return (
    

    <div className="App">
        <nav>
          <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            {/* <li><Link to="/Game">Game</Link></li> */}
            <li><Link to="/matchs">Matchs</Link></li>
            <li><Link to="/user-management">User</Link></li>
            {/* <li><Link to="/Logout">Logout</Link></li> */}
            
          </ul>
        </nav>
        <h1>Bienvenue !</h1>
      {/* <Link to="/">
          <img src={logo} className="App-logo" />
        </Link> */}
      <header className="App-header">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/matchs" element={<MatchList />} />
          <Route path="/user-management" element={<UserList />} />
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </header>
    </div>
  );
}



function Home() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "todo 1",
      completed: false,
    },
    {
      id: 2,
      title: "todo 2",
      completed: true,
    },
  ]);
  return (
    <>
      <Button
        onClick={function handleClick() {
          alert("5");
        }}
      />

      <Table nbLine={5} nbColumn={5} cellStyle={{ color: "red", border:"1px solid black"}} />
      <Table
        nbLine={5}
        nbColumn={5}
        cellStyle={{ color: "green" }}
        CellComponent={<span>name</span>}
      />
      <TodoList data={data} setData={setData} />
      <TodoList data={data} setData={setData} disableAdd={true} />
      <p>
      All rigth reserved @
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </>
  );
}

export default App;