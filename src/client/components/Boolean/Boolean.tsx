import React from 'react';
import { useForm } from 'react-hook-form';

export const Boolean = (question: object) => {

  const { register, handleSubmit, errors } = useForm();

  let correct = false;

  const q = 'Igneous rocks are formed by excessive heat and pressure.';

  const correctAnswer = 'false';

  const onSubmit = (event: any) => {
    if (event.answer === correctAnswer) {
      correct = true;
    }
    // send correct = true/false up as event
  };

  return (
    <div className="boolean">
      <div className="question">{q}</div>
      <form className="question-list" onSubmit={handleSubmit(onSubmit)}>
        <label className="option">
        <input className="radio" type="radio" value="true" name="answer" ref={register({ required: true })} />
        True
        </label>
        <label className="option">
        <input className="radio"  type="radio" value="false" name="answer" ref={register({ required: true })}/>
        False</label>
        <div className="error">
          {errors.answer && "ERROR: Selection is required"}
          </div>
        <button className="button" type="submit"><span className="button-text">Next</span></button>
      </form>
    </div>
  );
};