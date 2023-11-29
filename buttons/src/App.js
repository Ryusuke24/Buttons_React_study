import React from "react";
import Buttons from "./components/Buttons";
import appStyle from "./App.module.css";

function App() {
  return (
    <>
      <div className={appStyle.app}>
        <h2 className={appStyle.title}>CSS Module Buttons</h2>
      </div>
      <div className={appStyle.wrapper}>
        <Buttons />
      </div>
    </>
  );
}

export default App;
