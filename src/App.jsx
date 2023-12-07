import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";



function App() {
  const [mode, setMode] = useState("light");
  const getbody = ()=>{
    document.querySelector("body").setAttribute("class", mode);
  }
   const changemode = () => {
    if (mode === "light") {
      setMode("dark");
      // getbody();
    } else {
      setMode("light");
      // getbody();
    }
  };
  useEffect(() => {
    getbody();
  }, [mode]);


  return (
    <>
    <button id="mode" onClick={changemode}>{mode=='light'?'Dark':'Light'}</button>
    <QuestionBox mode={mode}/>
    </>
  );
}

export default App;