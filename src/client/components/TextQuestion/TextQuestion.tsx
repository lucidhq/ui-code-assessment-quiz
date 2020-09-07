import React from 'react';

export const TextQuestion = (question: object) => {

  const q = 'What color\/colour is a polar bear&#039;s skin?';

  const correct_answer = 'Black';

  return (
    <div className="text">
      <div className="question">{q}</div>
      <form>
        <label>
          <input type="text" />
        </label>
      </form>
    </div>
  );
};