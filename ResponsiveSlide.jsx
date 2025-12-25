import React, { useState } from "react";

const ResponsiveSlide = () => {
  const images = [
    { url: "./pexels-novkov-visuals-745725-34308076.jpg", id: 1 },
    { url: "./coffee.webp", id: 2 },
    { url: "./pexels-pixabay-257360-34308079.jpg", id: 3 },
    { url: "./content-slider.webp", id: 4 },
    { url: "./pexels-pixabay-34950-34308081.jpg", id: 5 },
  ];

  const Slide = ({ image_url, caption, active }) => {
    return (
      <div className={`slide ${active ? "active" : ""}`}>
        <img src={image_url} alt={caption} />
        <span>{caption}</span>
      </div>
    );
  };

  const Slider = ({ images }) => {
    const [active, setActive] = useState(0);

    const onNext = () => {
      if (active < images.length - 1) {
        setActive(active + 1);
      }
    };

    const onPrev = () => {
      if (active > 0) {
        setActive(active - 1);
      }
    };

    return (
      <div className="slider">
        <div className="slides">
          {images.map((e, i) => (
            <Slide key={e.caption} {...e} active={i === active} />
          ))}
        </div>
        <div className="navigation">
          <div class="navigation-bottom">
            {images.map((e, i) => (
              <div
                className={`dots ${i === active ? "active" : ""}`}
                key={e.caption}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <div className="navigation-next-prev">
            <div class="next-prev prev" onClick={onPrev}>
              {" "}
              &lt;{" "}
            </div>
            <div class="next-prev next" onClick={onNext}>
              {" "}
              &gt;{" "}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Slider images={images} />
    </div>
  );
};

export default ResponsiveSlide;
