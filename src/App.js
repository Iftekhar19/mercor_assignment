import { useState } from "react";
import "./App.css";
import BoardContainer from "./components/BoardContainer";
import MainBar from "./components/MainBar";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Filterbar from "./components/extraComponents/Filterbar";
import Heading from "./components/extraComponents/Heading";


function App() {
  const [toggle, setToggle]=useState(true)
  return (
    <div className="max-w-full mx-auto">
      <Navbar toggle={toggle} setToggle={setToggle}/>
      <MainPage>
        <Sidebar toggle={toggle} setToggle={setToggle}/>
        <MainBar>
         <Heading/>
         <Filterbar/>
         <BoardContainer/>
        </MainBar>
      </MainPage>
    </div>
  );
}

export default App;
