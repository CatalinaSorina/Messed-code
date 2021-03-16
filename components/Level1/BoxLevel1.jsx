import { useState, useEffect } from 'react';
import { BoxHolder, Box, Answer } from '../../styles/level1';
import Battery from './Battery';
import BoxChat from './BoxChat';
import BoxFace from './BoxFace';
import DropCode from './DropCode';
import { checkAnswer, checkCorrectAnswer } from './utils';

const BoxLevel1 = ({ happy, msg, details, editDetails, setNextLevel }) => {
  const [chatOpened, setChatOpened] = useState(false);
  const [detailsEdited, setDetailsEdited] = useState('');
  const [correctPosition, setCorrectPosition] = useState(false);
  const isHappy = happy || (correctPosition && checkAnswer(detailsEdited));
  useEffect(() => {
    setNextLevel &&
      setNextLevel(correctPosition && checkCorrectAnswer(detailsEdited));
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
            value={detailsEdited}
            onChange={({ target }) => setDetailsEdited(target.value)}
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
