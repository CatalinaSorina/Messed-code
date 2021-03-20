import styled, { css, keyframes } from 'styled-components';
import { getNumber } from '../components/Level1/utils';

export const Place = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  background: #423c33;
  border: 1px dashed #141310;
  width: 100%;
  height: 75%;
  border-radius: 4px;
  box-shadow: 0 0 0 0.5px black;
  margin-top: 10px;
`;

export const BoxHolder = styled.div(
  ({ topChat, bottomChat }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    #top {
      visibility: ${topChat ? 'visible' : 'hidden'};
    }
    #bottom {
      visibility: ${bottomChat ? 'visible' : 'hidden'};
    }
    #box-chat {
      padding: 15px;
    }
    [id$='circle'],
    #box-chat {
      background: white;
      border-radius: 100%;
      margin: 15px;
    }
    [id^='big'] {
      width: 14px;
      height: 14px;
    }
    [id^='middle'] {
      width: 10px;
      height: 10px;
    }
    [id^='small'] {
      width: 8px;
      height: 8px;
    }
  `
);

export const Box = styled.div(
  () => css`
    border: 1px solid black;
    border-radius: 4px;
    box-shadow: 0 0 0 0.5px black;
    width: 70%;
    height: 20%;
    cursor: pointer;
    position: relative;
  `
);

export const BoxBattery = styled.div(
  () => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0px;
    width: 100%;
    height: 100%;
  `
);

export const BatteryLife = styled.div(
  ({ charged }) => css`
    background: ${charged ? 'darkolivegreen' : 'darkred'};
    background-image: linear-gradient(
      90deg,
      ${charged ? 'green,darkgreen 100%,black' : 'red,darkred 100%,black'}
    );
  `
);

export const Face = styled.div(
  ({ happy = true }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    color: darkred;
    position: absolute;
    top: 0;

    [id^='eye'] {
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #eyes {
      justify-content: space-evenly;
      width: 100%;
    }
    #eye-globe {
      background: white;
      box-shadow: 0 0 0 0.2px black;
      width: 20px;
      height: 20px;
    }
    #eye {
      background: black;
      ${happy
        ? css`
            animation: ${happyEyeMove} infinite 0.4s alternate-reverse;
          `
        : css`
            animation: ${sadEyeMove} 6 1s alternate-reverse;
            transform: translateY(25%);
          `};
      box-shadow: 0 0 1px 0 black;
      width: 12px;
      height: 12px;
      font-size: 10px;
      color: white;
      text-shadow: 0 0 1px black;
    }
  `
);

const happyEyeMove = keyframes`
  0%   {transform: translateX(20%);}
  25%  {transform: translateX(10%)}
  50%  {transform: translateX(0%)}
  75%  {transform: translateX(-10%)}
  100% {transform: translateX(-20%)}
`;

const sadEyeMove = keyframes`
  0%   {transform: translateY(0%);}
  50%  {transform: translateY(10%)}
  100%  {transform: translateY(25%)}
`;

export const DropArea = styled.div(
  () => css`
    background: rgba(0, 0, 0, 0.8);
    margin-bottom: 5%;
  `
);

const setDraggableAnswerColor = answer => {
  let color;
  let number = getNumber(answer) || -1;
  if (number === -1) {
    if (answer.replace(' ', '') === '=true') number = 100;
    else if (answer !== '') number = 1;
    else number = 0;
  }
  if (number === 0) color = 'rgba(255, 255, 255, 0.5)';
  if (number > 0 && number <= 50) color = 'rgba(245, 117, 117)';
  if (number > 50 && number <= 100) color = 'rgba(128, 245, 117)';
  return color;
};

export const DraggableAnswer = styled.code(
  ({ answer = '' }) => css`
    width: 85px;
    height: 25px;
    background: transparent;
    overflow: hidden;
    border: 0.1px dashed ${setDraggableAnswerColor(answer)};
    border-radius: 4px;
    text-align: center;
    color: ${setDraggableAnswerColor(answer)};
    cursor: grab;
    margin-bottom: 5%;
  `
);

export const Answer = styled.input(
  () => css`
    width: 85px;
    height: 25px;
    background: transparent;
    overflow: hidden;
    border-radius: 4px;
    text-align: center;
    padding: 2px;
    margin-bottom: 5%;
  `
);

export const NextLevel = styled.button(
  () => css`
    position: absolute;
    font-size: 25px;
    top: 15%;
    left: 10%;
    width: 150px;
    height: 50px;
    color: #423c33;
    border: 3px solid darkorange;
    background: orange;
    overflow: hidden;
    text-align: center;
    padding: 5px;
    outline: none;
    animation: ${nextLevel} 4 0.8s alternate;
    border-radius: 4px;
    transform: rotate(-10deg);
    cursor: pointer;
  `
);

const nextLevel = keyframes`
  0%   {border-radius: 30%;transform:rotate(30deg);}
  25%  {border-radius: 10%;}
  50%  {border-radius: 4px;}
  75%  {border-radius: 20%;transform:rotate(-30deg);}
  100% {border-radius: 50%;}
`;

export const Letters = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 8px;
  font-size: 15px;
  cursor: text;
`;

export const Letter = styled.span(
  ({ sp }) => css`
    width: 20px;
    margin-right: 2px;
    border-bottom: 1px solid black;
    ${!sp &&
    css`
      padding: 0 4px;
    `};
  `
);

export const Space = styled.span`
  margin-right: 10px;
`;
