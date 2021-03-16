import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 5vh;
  width: 100%;
  background: black;
  color: white;
  padding: 5px;

  img {
    width: 20px;
    height: 20px;
  }
  img:hover {
    width: 50px;
    height: 50px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
  width: 100%;
  background: lavender;
  background-image: linear-gradient(
    120deg,
    pink,
    bisque,
    lightgreen,
    lavender,
    lightskyblue
  );
  font: bold 20px Monospace;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10vh;
  width: 100%;
  background: black;
  color: white;
  padding: 5px;

  button {
    border: 1px solid white;
    outline: none;
    background: transparent;
    margin-right: 8px;
    padding: 10px;
    border-radius: 5px;
    color: inherit;
    text-shadow: 0 0 4px black;
    box-shadow: inset 0 0 0 0.25px black;
  }
  button:hover:first-child {
    background: #406d44;
  }
  button:active:first-child {
    background: lightgreen;
  }
  button:hover:last-child {
    background: #775c3d;
  }
  button:active:last-child {
    background: bisque;
  }
`;
