import React from 'react';
import { useForm } from 'react-hook-form';

export const TextQuestion = (question: object) => {

  const { register, handleSubmit, errors } = useForm();

  let correct = false;

  const q = 'What color\/colour is a polar bear&#039;s skin?';

  const correctAnswer = 'Black';

  const onSubmit = (event: any) => {
    if (event.answer.toUpperCase() === correctAnswer.toUpperCase()) {
      correct = true;
    }
    // send correct = true/false up as event
  };

  return (
    <div className="text">
      <div className="question">{q}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input type="text" name="answer" ref={register({required: true})}/>
        </label>
        <div className="error">
          {errors.answer && "ERROR: Selection is required"}
          </div>
        <button className="button" type="submit"><span className="button-text">Next</span></button>
      </form>
    </div>
  );
};