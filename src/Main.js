import { Children, useEffect, useState } from "react";
import ModalWindow from "./ModalWindow";
import Alle from "./Portfolio/Alle";
import Buerogebaude from "./Portfolio/Buerogebaude";
import Bungalow from "./Portfolio/Bungalow";
import Doppelhaus from "./Portfolio/Doppelhaus";
import Einfamilienhaus from "./Portfolio/Einfamilienhaus";
import Bild from "./assets/images/Bild.png";

function Main() {
  const [isPortrait, setIsPortrait] = useState(
    window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const renderComponent = () => {
    switch (selectedCategory) {
      case "Alle":
        return <Alle />;
      case "Buerogebaude":
        return <Buerogebaude />;
      case "Bungalow":
        return <Bungalow />;
      case "Doppelhaus":
        return <Doppelhaus />;
      case "Einfamilienhaus":
        return <Einfamilienhaus />;
      default:
        return <Alle />;
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [scroll, setScroll] = useState(0);

  const scrollUp = () => {
    setScroll(window.screenY);
  };

  const upButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollUp);
  }, []);

  const toBlock = (targetY) => {
    window.scrollTo({ top: parseInt(targetY), behavior: "smooth" });
  };

  return (
    <div>
      <header>
        {isPortrait ? (
          <div className="navigation">
            <div className="menu">
              <a onClick={upButton}>Über uns</a>

              <a
                onClick={(e) => toBlock(e.target.dataset.target)}
                data-target="700"
              >
                Leistungen
              </a>
              <a
                onClick={(e) => toBlock(e.target.dataset.target)}
                data-target="1230"
              >
                Referenzen
              </a>
              <a
                onClick={(e) => toBlock(e.target.dataset.target)}
                data-target="1920"
              >
                Rechtliches
              </a>
              <a
                onClick={(e) => toBlock(e.target.dataset.target)}
                data-target="2600"
              >
                ...
              </a>
            </div>
            <div className="header-buttons">
              <button onClick={handleOpenModal} className="btn">
                Kontaktieren
              </button>

              <a
                href="https://www.instagram.com/rupa.bauprojekt?igsh=MWp5aTM2bzBrdnVyMg=="
                target="_blank"
                className="icon instagram"
              ></a>
              <a href="/" target="_blank" className="icon email"></a>
            </div>
          </div>
        ) : (
          <div className="navigation">
            <div className="header-buttons-mobile">
              <a
                href="https://www.instagram.com/rupa.bauprojekt?igsh=MWp5aTM2bzBrdnVyMg=="
                target="_blank"
                className="icon icon-mobile instagram"
              ></a>
              <a
                href="/"
                target="_blank"
                className="icon icon-mobile email"
              ></a>
              <a className="icon-menu"></a>
            </div>
          </div>
        )}
      </header>
      <ModalWindow show={showModal} onClose={handleCloseModal}>
        <h2 style={{ color: "#a31b0f", fontSize: "40px" }}>Kontakt</h2>
        <p style={{ fontSize: "22px" }}>
          Sie können uns per Telefon <br /> oder per E-Mail kontaktieren:
        </p>
      </ModalWindow>
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

        <div className="main-image-box">
          <img className="image" src={Bild} draggable="false" alt="" />
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <p
            className={`tag ${selectedCategory === "All" ? "selected" : ""}`}
            onClick={() => setSelectedCategory("All")}
          >
            Alles
          </p>
          <p
            className={`tag ${
              selectedCategory === "Buerogebaude" ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory("Buerogebaude")}
          >
            Bürogebäude
          </p>
          <p
            className={`tag ${
              selectedCategory === "Bungalow" ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory("Bungalow")}
          >
            Bungalow
          </p>
          <p
            className={`tag ${
              selectedCategory === "Doppelhaus" ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory("Doppelhaus")}
          >
            Doppelhaus
          </p>
          <p
            className={`tag ${
              selectedCategory === "Einfamilienhaus" ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory("Einfamilienhaus")}
          >
            Einfamilienhaus
          </p>
        </div>

        <div
          className="content"
          style={{ marginLeft: "-5vw", marginRight: "-5vw" }}
        >
          {renderComponent()}
        </div>
      </div>

      <div className="footer">Rupa</div>

      <button className={scroll < 100 ? "" : "btn-up"} onClick={upButton}>
        Nach oben
      </button>
    </div>
  );
}

export default Main;
