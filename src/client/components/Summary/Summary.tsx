import React, { useState, useEffect } from 'react';

interface Summary {
  scoreData: {
    correct: number,
    wrong: number
  }
}

export const Summary: React.FC<Summary> = (props: any) => {

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  useEffect(() => {
    setCorrect(props.scoreData.correct);
    setWrong(props.scoreData.wrong);
  }, [props]);

  return (
    <div className="summary">
      <div className="summary-header">SUMMARY</div>
        <ul className="summary-list">
          <li>Correct: <b>{correct}</b></li>
          <li>Wrong: <b>{wrong}</b></li>
          <li>Questions Answered: <b>3</b></li>
          <li>Final Score: <b>70%</b></li>
        </ul>
      </div>
  );
};