import InputArea from "./components/InputArea";
import "./App.css";
import UserList from "./components/UserList";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [userItem, setUserItem] = useState([
    { username: "Mr.Lee", age: 27, id: Math.random() },
    { username: "Mr.Kim", age: 25, id: Math.random() },
  ]);

  const [errorMessage, setErrorMessage] = useState("");

  const handleForm = (item) => {
    setUserItem([...userItem, item]);
  };
  const handleDeleteBtn = (itemId) => {
    const updateUser = userItem.filter((user) => user.id !== itemId);
    setUserItem(updateUser);
  };

  const handleError = (info) => {
    setErrorMessage(info);
  };

  const handleCloseModal = (close) => {
    close && setErrorMessage("");
  };

  return (
    <div className="App">
      {errorMessage !== "" ? (
        <Modal error={errorMessage} onClose={handleCloseModal} />
      ) : (
        ""
      )}
      <section>
        <InputArea onForm={handleForm} onError={handleError} />
      </section>
      <section>
        <UserList
          key={Math.random()}
          items={userItem}
          onDeleteBtn={handleDeleteBtn}
        />
      </section>
    </div>
  );
}

export default App;
