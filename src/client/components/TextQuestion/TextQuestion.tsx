import React from 'react';

export const TextQuestion = (question: object) => {

  const q = 'What color\/colour is a polar bear&#039;s skin?';

  const correct_answer = 'Black';

  return (
    <div className="text">
      <span className="question">{q}</span>
    </div>
  );
};