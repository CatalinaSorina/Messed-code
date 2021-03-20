import React, { useRef, useEffect } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import { DropArea, DraggableAnswer } from '../../../styles/level1';
hljs.registerLanguage('javascript', javascript);

const DropCode = ({ answer, setCorrectPosition }) => {
  const answerRef = useRef();
  const dropWrap = useRef();

  useEffect(() => {
    dropWrap.current && hljs.highlightBlock(dropWrap.current);
  }, [dropWrap]);

  return (
    <>
      <DraggableAnswer ref={answerRef} draggable answer={answer} id='cursorGrab'>
        {answer || '...'}
      </DraggableAnswer>
      <DropArea
        ref={dropWrap}
        onDrop={e => {
          e.preventDefault();
          e.target.append(answerRef.current);
          setCorrectPosition(
            answerRef.current.parentElement.innerHTML.includes(' charged ')
          );
        }}
        onDragOver={e => e.preventDefault()}>
        {`const Battery = ({ charged }) => (<BatteryHolder>{charged && <BatteryLife charged={charged} />}</BatteryHolder>);`
          .split(' ')
          .map((word, id) => (
            <code className='javascript' key={id}>
              {` ${word} `}
            </code>
          ))}
      </DropArea>
    </>
  );
};

export default DropCode;
