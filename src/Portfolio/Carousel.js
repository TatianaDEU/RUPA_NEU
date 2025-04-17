import React, { useState, useRef, useEffect } from "react";
import "./Carousel.scss";
import img1 from "../assets/carousel/all/1.jpg";
import img2 from "../assets/carousel/all/2.jpg";
import img3 from "../assets/carousel/all/3.jpg";
import img4 from "../assets/carousel/all/4.jpg";
import img5 from "../assets/carousel/all/5.jpg";
import img6 from "../assets/carousel/all/6.jpg";
import img7 from "../assets/carousel/all/7.jpg";
import img8 from "../assets/carousel/all/8.jpg";
import Buerogebaude from "./Buerogebaude";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Carousel = ({ direction }) => {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const requestIdRef = useRef(null);
  const startPositionRef = useRef(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    const animate = () => {
      if (!isHovered) {
        startPositionRef.current += direction === "left" ? -0.3 : 0.3;
        if (startPositionRef.current >= carousel.scrollWidth / 2) {
          startPositionRef.current = 0;
        } else if (startPositionRef.current <= 0) {
          startPositionRef.current = carousel.scrollWidth / 2;
        }
        carousel.scrollLeft = startPositionRef.current;
      }
      requestIdRef.current = requestAnimationFrame(animate);
    };

    requestIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestIdRef.current);
  }, [direction, isHovered]);

  return (
    <div
      className="carousel-container"
      ref={carouselRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-content">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Portfolio"
            className="carousel-image"
            onClick={() => setSelectedImage(image)}
          />
        ))}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Portfolio"
            className="carousel-image"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="modal-window-image" onClick={closeModal}>
          <div style={{ display: "flex" }} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="" className="modal-image" />
            <p>
              <button
                onClick={closeModal}
                className="modal-image-close-button"
              ></button>
            </p>
          </div>
        </div>
      )}
    </div>
   
  );
};

export default Carousel;
