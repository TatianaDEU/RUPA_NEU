import { Children, useState } from "react";
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
          <h2 style={{ color: "#a31b0f", fontSize: "40px" }}>Kontakt</h2>
          <p style={{ fontSize: "22px" }}>
            Sie können uns per Telefon <br /> oder per E-Mail kontaktieren:
          </p>
        </ModalWindow>

        <a href="/" target="_blank" className="icon instagram"></a>
        <a href="/" target="_blank" className="icon email" ></a>

        <div className="switch">
          <div className="theme light"></div>
        </div>
      </header>

      <div className="welcome-block">
       <div className="first-block">
          <h1><span className="title">RUPA</span> Bauprojekt 

          </h1>
          <h2 style={{marginBottom: "7%", marginTop: "7%"}}>
          Ihr zuverlässiger Partner für <span style={{color: "#a31b0f"}}>hochwertige Bauprojekte.</span>
          </h2>
          <h3>In unserer Arbeit legen wir Wert auf nachhaltige und langlebige Arbeit.</h3>
       </div>

      </div>
    </div>
  );
}

export default Main;
