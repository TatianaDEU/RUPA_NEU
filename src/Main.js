import { useState } from "react";
import ModalWindow from "./ModalWindow";

function Main() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <header>
        <div className="menu">
          <a>Über uns</a>
          <a>Referenzen</a>
          <a>Leistungen</a>
          <a>Rechtliches</a>
        </div>

        <button onClick={handleOpenModal} className="btn">
          Kontaktieren
        </button>
        <ModalWindow show={showModal} onClose={handleCloseModal}>
          <h2 style={{ color: "#4824ff", fontSize: "40px" }}>Kontakt</h2>
          <p style={{ fontSize: "22px" }}>
            Sie können uns per Telefon <br /> oder per E-Mail kontaktieren
          </p>
        </ModalWindow>

        <a href="/" target="_blank" className="icon instagram"></a>
        <a href="/" target="_blank" className="icon email"></a>

        <div className="switch">
          <div className="theme light"></div>
        </div>
      </header>
    </div>
  );
}

export default Main;
