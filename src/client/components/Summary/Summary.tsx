import React from 'react';

export const Summary = (question: object) => {

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