import React from 'react';

export const Multiple= (question: object) => {

  const q = 'Which game did "Sonic The Hedgehog" make his first appearance in?';

  // modify the data on the API to randomize incorrect answers with correct answer

  const answers = ["Rad Mobile", "Sonic The Hedgehog", "Super Mario 64", "Mega Man"];

  return (
    <div className="multiple">
      <span className="question">{q}</span>
      {
        answers.map((answer, index) => {
        <span key={answers[index]}></span>
        })
      }
    </div>
  );
};