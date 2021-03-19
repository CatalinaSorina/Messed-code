import styled from 'styled-components';

export const BreakLine = styled.hr`
  width: 50%;
  border: 0.5px solid black;
  border-radius: 100%;
`;

export const StartButton = styled.a`
  outline: none;
  background: black;
  margin-right: 8px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  text-shadow: 0 0 4px black;
  box-shadow: inset 0 0 0 0.25px black;
  text-decoration: none;
  &:hover {
    background: #406d69;
  }
  &:active {
    background: lightcoral;
  }
`;
