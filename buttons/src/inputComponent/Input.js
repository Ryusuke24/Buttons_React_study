import React from "react";
import style from "./Input.module.css";

function Input() {
  return (
    <>
      <input
        readOnly
        placeholder="info input"
        className={style.infoInput}
      ></input>
      <input type="text" className={style.userInput}></input>
      <input type="password" className={style.passwordInput}></input>
    </>
  );
}

export default Input;
