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
        <a href="/" target="_blank" className="icon email"></a>

        <div className="switch">
          <div className="theme light"></div>
        </div>
      </header>

      <div className="welcome-block">
        <div className="first-block">
          <h1>
            <span className="title">RUPA</span> Bauprojekt
          </h1>
          <h2 style={{ marginBottom: "7%", marginTop: "7%" }}>
            Ihr zuverlässiger Partner für{" "}
            <span style={{ color: "#a31b0f" }}>hochwertige Bauprojekte.</span>
          </h2>
          <h3>
            In unserer Arbeit legen wir Wert auf{" "}
            <span style={{ color: "#a31b0f" }}>nachhaltige</span> und{" "}
            <span style={{ color: "#a31b0f" }}>langlebige</span> Arbeit.
          </h3>
        </div>
      </div>
      <div className="service-block" draggeble="false">
        <h1 style={{ fontSize: "52px" }}>LEISTUNGEN</h1>
        <p style={{ fontSize: "27px" }}>
          Wir bieten ein{" "}
          <span style={{ color: "#a31b0f" }}>umfangreiches </span>
          Leistungsspektrum:
        </p>
        <div style={{ display: "flex" }}>
          <p className="tag">
            <p className="tag-icon" />
            Maurerarbeiten aller Art
          </p>
          <p className="tag">
            <p className="tag-icon" />
            Klinkerarbeiten
          </p>
          <p className="tag">
            <p className="tag-icon" />
            Fugenarbeiten
          </p>
          <p className="tag">
            <p className="tag-icon" />
            Vollwärmeschutz
          </p>
          <p className="tag">
            <p className="tag-icon" />
            Trockenbauarbeiten
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "16px" }}>
          <p className="tag">
            <p className="tag-icon" />
            Beton- und Stahlbetonarbeiten
          </p>
          <p className="tag">
            <p className="tag-icon" />
            Sanierungsarbeiten
          </p>

          <p className="tag">
            <p className="tag-icon" />
            Innen- und Außenputzarbeiten
          </p>
          <p className="tag">
            <p className="tag-icon" />
            Malerarbeiten
          </p>
        </div>
        <p style={{ fontSize: "27px" }}>
          <span
            style={{ color: "#a31b0f", cursor: "pointer" }}
            onClick={handleOpenModal}
          >
            Kontaktieren
          </span>{" "}
          Sie uns, um Ihr nächstes Bauprojekt zu besprechen. <br />
          Wir freuen uns darauf, Ihre Visionen Realität werden zu lassen!
        </p>
      </div>

      <div className="portfolio-block">
        <div className="first-block">
          <h1 className="main-title">Referenzen</h1>
          {/*<div style={{position: "absolute", marginLeft: "-660px"}}>
            <p className="gradient-part-one"></p> 
            <p className="title-border">Refe</p>
          </div> 
          <div style={{position: "absolute", marginLeft: "620px"}}>
           < className="gradient-part-two">
            <p className="title-border">Renzen</p>
          </div>*/}
        </div>
      </div>
    </div>
  );
}

export default Main;
