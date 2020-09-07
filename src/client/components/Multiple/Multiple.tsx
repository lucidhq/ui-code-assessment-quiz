import React from 'react';

export const Multiple = (question: object) => {

  const q = 'Which game did "Sonic The Hedgehog" make his first appearance in?';

  // modify the data on the API to randomize incorrect answers with correct answer

  const correctAnswer = "Rad Mobile";

  const answers = ["Rad Mobile", "Sonic The Hedgehog", "Super Mario 64", "Mega Man"];

  return (
    <div className="multiple">
      <div className="question">{q}</div>
      <form className="question-list">
        <label className="option">
        <input className="radio" type="radio" />
        Rad Mobile
        </label>
        <label className="option">
        <input className="radio"  type="radio" />
        Sonic The Hedgehog</label>
        <label className="option">
        <input className="radio" type="radio" />
        Super Mario 64
        </label>
        <label className="option">
        <input className="radio"  type="radio" />
        Mega Man</label>
      </form>
        <button className="button"><span className="button-text">Next</span></button>
    </div>
  );
};