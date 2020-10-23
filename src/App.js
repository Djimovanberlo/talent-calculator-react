import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ClassesNav from "../src/components/ClassesNav";
import MainContent from "../src/components/MainContent";

function App() {
  return (
    <div className="App">
      <ClassesNav />
      <MainContent />
    </div>
  );
}

export default App;
