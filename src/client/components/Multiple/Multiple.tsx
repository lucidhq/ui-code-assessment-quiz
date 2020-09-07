import React from 'react';
import { useForm } from 'react-hook-form';

export const Multiple = (question: object) => {

  const { register, handleSubmit, errors } = useForm();

  const q = 'Which game did "Sonic The Hedgehog" make his first appearance in?';

  // modify the data on the API to randomize incorrect answers with correct answer

  const correctAnswerIndex = 0;

  const answers = ["Rad Mobile", "Sonic The Hedgehog", "Super Mario 64", "Mega Man"];

  const onSubmit = (event: any) => {
    console.log('EVENT', event);
    console.log('ERRORS:', errors);
  };

  return (
    <div className="multiple">
      <div className="question">{q}</div>
      <form className="question-list" onSubmit={handleSubmit(onSubmit)}>
        <label className="option">
        <input className="radio" type="radio" value="0" name="answer" ref={register({ required: true })}/>
        Rad Mobile
        </label>
        <label className="option">
        <input className="radio"  type="radio" value="1" name="answer" ref={register({ required: true })}/>
        Sonic The Hedgehog</label>
        <label className="option">
        <input className="radio" type="radio" value="2" name="answer" ref={register({ required: true })}/>
        Super Mario 64
        </label>
        <label className="option">
        <input className="radio"  type="radio" value="3" name="answer"
        ref={register({ required: true })}/>
        Mega Man</label>
        <div className="error">
          {errors.answer && "ERROR: Selection is required"}
          </div>
        <button className="button" type="submit"><span className="button-text">Next</span></button>
      </form>
    </div>
  );
};