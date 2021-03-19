import { useState } from 'react';
import { Letter, Letters, Space } from '../../../styles/level1';
import { letter } from '../utils';
const Concept = ({ updateCash }) => {
  const [letters, setLetters] = useState([]);
  const handleLetter = ({ key }) => {
    if ('default props'.includes(key)) {
      if (!letters.includes(key)) {
        setLetters([...letters, key]);
        updateCash(0.1);
      }
    } else {
      updateCash(-0.1);
    }
  };

  const checkLetter = letter => letters.includes(letter) && letter;
  return (
    <Letters onKeyDown={handleLetter} tabIndex='0'>
      How is this concept called?
      <div>
        <Letter sp={letters.includes(letter.d)}>{checkLetter(letter.d)}</Letter>
        <Letter sp={letters.includes(letter.e)}>{checkLetter(letter.e)}</Letter>
        <Letter sp={letters.includes(letter.f)}>{checkLetter(letter.f)}</Letter>
        <Letter sp={letters.includes(letter.a)}>{checkLetter(letter.a)}</Letter>
        <Letter sp={letters.includes(letter.u)}>{checkLetter(letter.u)}</Letter>
        <Letter sp={letters.includes(letter.l)}>{checkLetter(letter.l)}</Letter>
        <Letter sp={letters.includes(letter.t)}>{checkLetter(letter.t)}</Letter>
        <Space />
        <Letter sp={letters.includes(letter.p)}>{checkLetter(letter.p)}</Letter>
        <Letter sp={letters.includes(letter.r)}>{checkLetter(letter.r)}</Letter>
        <Letter sp={letters.includes(letter.o)}>{checkLetter(letter.o)}</Letter>
        <Letter sp={letters.includes(letter.p)}>{checkLetter(letter.p)}</Letter>
        <Letter sp={letters.includes(letter.s)}>{checkLetter(letter.s)}</Letter>
      </div>
    </Letters>
  );
};

export default Concept;
