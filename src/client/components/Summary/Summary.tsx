import React from 'react';

interface Summary {
  scoreData: {
    correct: number,
    wrong: number
  }
}

export const Summary = (props: any) => {

  return (
    <div className="summary">
      <div className="summary-header">SUMMARY</div>
        <ul className="summary-list">
          <li>Correct: <b>2</b></li>
          <li>Wrong: <b>1</b></li>
          <li>Questions Answered: <b>3</b></li>
          <li>Final Score: <b>70%</b></li>
        </ul>
      </div>
  );
};