import React from 'react';

export const Boolean = (question: object) => {

  const q = 'Igneous rocks are formed by excessive heat and pressure.';

  // make answer case insensitive

  const correct_answer = false;

  return (
    <div className="boolean">
      <div className="question">{q}</div>
      <form className="question-list">
        <label className="option">
        <input className="radio" type="radio" />
        True
        </label>
        <label className="option">
        <input className="radio"  type="radio" />
        False</label>
      </form>
    </div>
  );
};