import { useWindowSize } from "@/hooks";
import styles from "@/styles/TypeHomeHero.module.scss";
import React from "react";
import { useEffect, useState } from "react";

interface ICordicate {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

interface ICanvas {
  lineWidth: number;
  clearRect: (arg0: number, arg1: number, arg2: any, arg3: any) => void;
  reset: () => void;
  moveTo: (arg0: number, arg1: number) => void;
  lineTo: (arg0: number, arg1: number) => void;
  strokeStyle: string;
  stroke: () => void;
  restore: () => void;
}

const setCordicate = (
  startX: number,
  startY: number,
  endX: number,
  endY: number
): ICordicate => {
  return {
    startX,
    startY,
    endX,
    endY,
  };
};

const drawStaticLine = (
  c: ICanvas,
  canvas: HTMLElement | null,
  cordicateOne: ICordicate,
  cordicateTwo: ICordicate,
  cordicateThree: ICordicate,
  cordicateFour: ICordicate,
  cordicateFive: ICordicate
) => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.reset();
  const amount = 1;
  c.moveTo(cordicateOne.startX, cordicateOne.startY);
  c.lineTo(
    cordicateOne.startX + (cordicateOne.endX - cordicateOne.startX) * amount,
    cordicateOne.startY + (cordicateOne.endY - cordicateOne.startY) * amount
  );

  c.moveTo(cordicateFive.startX, cordicateFive.startY);
  c.lineTo(
    cordicateFive.startX + (cordicateFive.endX - cordicateFive.startX) * amount,
    cordicateFive.startY + (cordicateFive.endY - cordicateFive.startY) * amount
  );

  c.moveTo(cordicateFour.startX, cordicateFour.startY);
  c.lineTo(
    cordicateFour.startX + (cordicateFour.endX - cordicateFour.startX) * amount,
    cordicateFour.startY + (cordicateFour.endY - cordicateFour.startY) * amount
  );

  c.moveTo(cordicateTwo.startX, cordicateTwo.startY);
  c.lineTo(
    cordicateTwo.startX + (cordicateTwo.endX - cordicateTwo.startX) * amount,
    cordicateTwo.startY + (cordicateTwo.endY - cordicateTwo.startY) * amount
  );

  c.moveTo(cordicateThree.startX, cordicateThree.startY);
  c.lineTo(
    cordicateThree.startX +
      (cordicateThree.endX - cordicateThree.startX) * amount,
    cordicateThree.startY +
      (cordicateThree.endY - cordicateThree.startY) * amount
  );
  c.strokeStyle = "white";
  c.stroke();
  c.restore();
};

const drawDynamicLine = (
  c: ICanvas,
  canvas: HTMLElement | null,
  cordicateOne: ICordicate,
  cordicateTwo: ICordicate,
  cordicateThree: ICordicate,
  cordicateFour: ICordicate,
  cordicateFive: ICordicate
) => {
  let amount = 0;
  const id = setInterval(() => {
    amount += 0.05;
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.strokeStyle = "#cccccc";

    if (amount <= 1.05) {
      setTimeout(() => {
        c.moveTo(cordicateOne.startX, cordicateOne.startY);
        c.lineTo(
          cordicateOne.startX +
            (cordicateOne.endX - cordicateOne.startX) * amount,
          cordicateOne.startY +
            (cordicateOne.endY - cordicateOne.startY) * amount
        );
      }, 0);

      setTimeout(() => {
        c.moveTo(cordicateFive.startX, cordicateFive.startY);
        c.lineTo(
          cordicateFive.startX +
            (cordicateFive.endX - cordicateFive.startX) * amount,
          cordicateFive.startY +
            (cordicateFive.endY - cordicateFive.startY) * amount
        );
      }, 900);

      setTimeout(() => {
        c.moveTo(cordicateFour.startX, cordicateFour.startY);
        c.lineTo(
          cordicateFour.startX +
            (cordicateFour.endX - cordicateFour.startX) * amount,
          cordicateFour.startY +
            (cordicateFour.endY - cordicateFour.startY) * amount
        );
      }, 900);

      setTimeout(() => {
        c.moveTo(cordicateTwo.startX, cordicateTwo.startY);
        c.lineTo(
          cordicateTwo.startX +
            (cordicateTwo.endX - cordicateTwo.startX) * amount,
          cordicateTwo.startY +
            (cordicateTwo.endY - cordicateTwo.startY) * amount
        );
      }, 900);

      setTimeout(() => {
        c.moveTo(cordicateThree.startX, cordicateThree.startY);
        c.lineTo(
          cordicateThree.startX +
            (cordicateThree.endX - cordicateThree.startX) * amount,
          cordicateThree.startY +
            (cordicateThree.endY - cordicateThree.startY) * amount
        );
      }, 900);
    }

    if (amount > 1.05) {
      clearInterval(id);
    }

    c.stroke();
    c.restore();
  }, 50);
};

const TypeHomeHero = () => {
  const size = useWindowSize();
  const canvasRef = React.useRef(null);
  const canvasBtnRef = React.useRef(null);

  const [isFirstTime, setIsFirstTime] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    if (size.width !== 0) {
      setIsFirstTime(false);

      const newWidth = size.width;
      const newHeight = 570;

      const cordicateOne = setCordicate(70, 50, newWidth - 100, 50);
      const cordicateTwo = setCordicate(70, 50, 70, newHeight);
      const cordicateThree = setCordicate(
        70,
        newHeight,
        newWidth - 70,
        newHeight
      );
      const cordicateFour = setCordicate(
        newWidth - 70,
        80,
        newWidth - 70,
        newHeight
      );
      const cordicateFive = setCordicate(newWidth - 100, 50, newWidth - 70, 80);

      if (isFirstTime) {
        drawDynamicLine(
          c,
          canvas,
          cordicateOne,
          cordicateTwo,
          cordicateThree,
          cordicateFour,
          cordicateFive
        );
      } else {
        drawStaticLine(
          c,
          canvas,
          cordicateOne,
          cordicateTwo,
          cordicateThree,
          cordicateFour,
          cordicateFive
        );
      }
    }
  }, [size.width]);

  return (
    <div className={styles.typeHomeHero}>
      <section>
        <div className={styles.backgroundWrapper}>
          <div className={styles.wrapper}>
            <div className={styles.poster}>
              {/* <img data-object-fit="cover" src=""></img> */}
            </div>
            <video autoPlay preload="metadata" muted loop playsInline>
              <source src="/videos/hero-blurred.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={styles.foreBackgroundWrapper}>
          <div className={styles.foreGroundVideoWrapper}>
            <div className={styles.wrapper}>
              <video autoPlay preload="metadata" muted loop playsInline>
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className={styles.containerCanvas}>
            <canvas
              style={{
                top: -60,
                right: -60,
              }}
              ref={canvasRef}
              width={size.width}
              height="600"
            ></canvas>
          </div>
          <div className={styles.foreGroundInner}>
            <div className={styles.foreGroundRow}>
              <div className={styles.logo}>
                <img
                  src="/main/logo.png"
                  data-testid="hero:logo"
                  sizes="(max-width: 599px) 80vw,40vw"
                />
              </div>
            </div>
            <div className={styles.foreGroundRow}>
              <a className={styles.anchor}>
                <span className={styles.inner}>
                  <div className={styles.revealWrapper}>
                    <span className={styles.background}></span>
                  </div>
                  <span className={styles.label}>chơi miễn phí</span>
                </span>
                <div className={styles.container}>
                  <canvas
                    style={{
                      top: -60,
                      right: -60,
                    }}
                    ref={canvasBtnRef}
                    width={size.width}
                    height="600"
                  ></canvas>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TypeHomeHero;
