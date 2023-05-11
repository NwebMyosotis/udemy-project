import React, { useState } from "react";
import styles from "./InputArea.module.css";

function InputArea(props) {
  const [usernameValue, setUsernameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");

  const handleUserInput = (event) => {
    setUsernameValue(event.target.value);
  };

  const handleAgeInput = (event) => {
    setAgeValue(event.target.value);
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    if (usernameValue === "" || ageValue === "") {
      props.onError("Please enter a vaild name and age (non-empty value)");
      setUsernameValue("");
      setAgeValue("");
      return;
    }
    if (ageValue < 0) {
      props.onError("Please enter a vaild age (>0)");
      setUsernameValue("");
      setAgeValue("");
      return;
    }
    const users = {
      username: usernameValue,
      age: ageValue,
      id: Math.random(),
    };
    props.onForm(users);
    setUsernameValue("");
    setAgeValue("");
  };

  return (
    <form onSubmit={handleSumbit} className={styles.formArea}>
      <label>Username</label>
      <input type="text" onChange={handleUserInput} value={usernameValue} />
      <label>Age (Years)</label>
      <input type="number" onChange={handleAgeInput} value={ageValue} />
      <button type="submit">Add User</button>
    </form>
  );
}

export default InputArea;
