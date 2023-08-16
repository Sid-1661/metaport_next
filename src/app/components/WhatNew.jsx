import React, { useEffect, useState, useMemo } from "react";
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

const oneSec = 1000;
const oneMin = oneSec * 60;
const oneHour = oneMin * 60;
const oneDay = oneHour * 24;

const WhatNew = () => {
  const { t } = useTranslation();

  const [animating, setAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const launchDate = new Date(2023, 8, 10);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    console.log(currentDate);
    setTimeout(() => {
      setCurrentDate(new Date(new Date().getTime() + 1000));
    }, 1000);
  }, [currentDate]);

  const days = useMemo(
    () => Math.floor((launchDate.getTime() - currentDate.getTime()) / oneDay),
    [currentDate]
  );

  const hours = useMemo(
    () =>
      Math.floor(
        ((launchDate.getTime() - currentDate.getTime()) % oneDay) / oneHour
      ),
    [currentDate]
  );

  const mins = useMemo(
    () =>
      Math.floor(
        ((launchDate.getTime() - currentDate.getTime()) % oneHour) / oneMin
      ),
    [currentDate]
  );

  const secs = useMemo(
    () =>
      Math.floor(
        ((launchDate.getTime() - currentDate.getTime()) % oneMin) / oneSec
      ),
    [currentDate]
  );

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

  const slides = items.map((item, index) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={index}>
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
                <div className="time">{days > 9 ? days : "0" + days}</div>
                <div className="time-desc">DAYS</div>
              </div>
              <div className="time-item">
                <div className="time">:</div>
                <div className="time-desc"></div>
              </div>
              <div className="time-item">
                <div className="time">{hours > 9 ? hours : "0" + hours}</div>
                <div className="time-desc">HOURS</div>
              </div>
              <div className="time-item">
                <div className="time">:</div>
                <div className="time-desc"></div>
              </div>
              <div className="time-item">
                <div className="time">{mins > 9 ? mins : "0" + mins}</div>
                <div className="time-desc">MINS</div>
              </div>
              <div className="time-item">
                <div className="time">:</div>
                <div className="time-desc"></div>
              </div>
              <div className="time-item">
                <div className="time">{secs > 9 ? secs : "0" + secs}</div>
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
