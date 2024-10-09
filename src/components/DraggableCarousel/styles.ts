import { css } from "@emotion/react";
import { roboto } from "@/src/theme/fonts";

export const Container = css`
  position: relative;
  margin: 0 -8px;
`;

export const Background = (background: string) => css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  background: ${background};
`;

export const Carousel = css`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  padding: 79px 0 63px;
`;

export const Cards = css`
  position: relative;
  height: 632px;

  .deck {
    position: absolute;
    right: 92px;
    top: 36px;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    touch-action: none;
    cursor: grab;
    z-index: 5;

    & > div {
      position: relative;
      touch-action: none;
      background-repeat: no-repeat;
      background-position: center center;
      width: 632px;
      height: 598px;
      will-change: transform;
      border-radius: 10px;
    }
  }
`;

export const InfoWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 69px 18px 52px 85px;
`;

export const SliderSubTitle = css`
  position: relative;
  font-size: 16px;
  text-transform: uppercase;
`;

export const SliderTitle = css`
  position: relative;
  font-size: 56px;
  margin: 17px 0 40px;
  font-weight: 900;
  letter-spacing: 0.7px;
  line-height: 57px;
  font-family: ${roboto.style.fontFamily};
`;

export const JoinButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 18px 40px;
  background: #fff;
  min-width: 92px;
  color: #000000;
  border-radius: 46px;
  box-shadow: 4px 5px 4px 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
  margin-left: -6px;
  letter-spacing: -0.5px;
  transition: 0.3s;

  &:hover {
    box-shadow: none;
  }
`;

export const SwitchSlider = css`
  position: absolute;
  bottom: 53px;
  left: 81px;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ControlButton = css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #020202;

  &:disabled {
    opacity: 0.5;
    border: 1px solid #02020234;
  }
`;

export const ProgressWrapper = css`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ProgressBar = css`
  position: relative;
  width: 26px;
  height: 2px;
  background: rgba(0, 0, 0, 0.08);
  margin: 0 10px;
  overflow: hidden;

  span {
    position: absolute;
    top: 0;
    left: 0;
    background: #000000;
    height: 2px;
    transition: 0.1s;
  }
`;
