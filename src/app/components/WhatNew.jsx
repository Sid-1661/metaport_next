import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
} from "reactstrap";

const items = [
  {
    src: "images/wallet-new.png",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "images/wallet-new.png",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "images/wallet-new.png",
    altText: "Slide 1",
    caption: "Slide 1",
  },
];

const WhatNew = () => {
  const { t } = useTranslation();

  const [animating, setAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    console.log({ newIndex, animating });
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
        <div className="WhatsNewItem">
          <img src={item.src} alt={item.altText} />
          <div className="WhatNewItemInfo">
            <div className="title">ULTRAI WALLET</div>
            <div className="desc">
              Sixth Generation DeFi wallet with more secure and transparent use
              cases
            </div>
            <div className="time-container">
              <div className="time-item">
                <div className="time">24</div>
                <div className="time-desc">DAYS</div>
              </div>
              <div className="time-item">
                <div className="time">:</div>
                <div className="time-desc"></div>
              </div>
              <div className="time-item">
                <div className="time">08</div>
                <div className="time-desc">HOURS</div>
              </div>
              <div className="time-item">
                <div className="time">:</div>
                <div className="time-desc"></div>
              </div>
              <div className="time-item">
                <div className="time">32</div>
                <div className="time-desc">MINS</div>
              </div>
              <div className="time-item">
                <div className="time">:</div>
                <div className="time-desc"></div>
              </div>
              <div className="time-item">
                <div className="time">48</div>
                <div className="time-desc">SECS</div>
              </div>
            </div>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Container className="WhatsNew">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        {/* <CarouselItem onExiting={onExiting} onExited={onExited}>
          <img src={"images/wallet-new.png"} />
        </CarouselItem>
        <CarouselItem onExiting={onExiting} onExited={onExited}>
          <img src={"images/wallet-new.png"} />
        </CarouselItem> */}
        {/* <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />

        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        /> */}
        <div
          className="carousel-control-item carousel-control-item-prev"
          onClick={previous}
        >
          <img src="images/arrow-left.svg" />
        </div>
        <div
          className="carousel-control-item carousel-control-item-next"
          onClick={next}
        >
          <img src="images/arrow-right.svg" />
        </div>
      </Carousel>
      <div className="carousel-indicators-wrap">
        {items.map((item, index) => (
          <div
            className={`carousel-indicator ${
              index === activeIndex && "active"
            }`}
            onClick={() => goToIndex(index)}
          ></div>
        ))}
      </div>
    </Container>
  );
};

export default WhatNew;
