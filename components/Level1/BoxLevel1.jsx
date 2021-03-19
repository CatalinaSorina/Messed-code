import { useState, useEffect } from 'react';
import { BoxHolder, Box, Answer } from '../../styles/level1';
import Battery from './components/Battery';
import BoxChat from './components/BoxChat';
import BoxFace from './components/BoxFace';
import DropCode from './components/DropCode';
import { checkAnswer, checkCorrectAnswer, getScore } from './utils';

const BoxLevel1 = ({ happy, msg, details, editDetails, setNextLevel, updateLevel, updateCash }) => {
  const [chatOpened, setChatOpened] = useState(false);
  const [detailsEdited, setDetailsEdited] = useState('');
  const [correctPosition, setCorrectPosition] = useState(false);
  const isHappy = happy || (correctPosition && checkAnswer(detailsEdited));
  const correctAnswers = correctPosition && checkCorrectAnswer(detailsEdited);

  useEffect(() => {
    if (setNextLevel && updateLevel) {
      setNextLevel(correctAnswers);
      const score = correctAnswers ? getScore(detailsEdited) : 0;
      updateLevel({score: score});
      updateCash && score!==0 && updateCash(score / 100);
    }
  }, [correctPosition, detailsEdited]);

  return (
    <BoxHolder
      topChat={isHappy && chatOpened}
      bottomChat={editDetails && chatOpened}>
      {editDetails ? (
        <>
          <DropCode
            answer={detailsEdited}
            setCorrectPosition={setCorrectPosition}
          />
          <Answer
            disabled={correctAnswers}
            value={detailsEdited}
            onChange={({ target }) => !correctAnswers && setDetailsEdited(target.value)}
          />
        </>
      ) : (
        <BoxChat msg={msg} />
      )}
      <Box onClick={() => setChatOpened(!chatOpened)}>
        <Battery charged={isHappy} />
        <BoxFace happy={isHappy} />
        {!editDetails && details}
      </Box>
      {editDetails && (
        <BoxChat
          top={false}
          msg={`I have ${isHappy ? isHappy + ' life' : 'nothing'}`}
        />
      )}
    </BoxHolder>
  );
};

export default BoxLevel1;
