import "./Modal.css";

const Modal = (props) => {
  const handleClose = (event) => {
    const modalTitle = document.querySelector(".modalTitle");
    const modalMain = document.querySelector(".modalMain");
    const modalMainText = document.querySelector(".modalMain p");
    if (
      event.target !== modalTitle &&
      event.target !== modalMain &&
      event.target !== modalMainText
    ) {
      props.onClose("close");
    }
  };

  return (
    <div onClick={handleClose} className="modalArea">
      <div className="modalTitle">Invaild Input</div>
      <div className="modalMain">
        <p>{props.error}</p>
        <button>Okay</button>
      </div>
    </div>
  );
};

export default Modal;
