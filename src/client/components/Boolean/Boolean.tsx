import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface Bool {
  question: string;
  correctAnswer: any;
}

export const Boolean: React.FC<Bool> = (props) => {

  const { register, handleSubmit, errors } = useForm();

  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  let correct = false;

  useEffect(() => {
    setQuestion(props.question);
    setCorrectAnswer(props.correctAnswer);
  }, [props]);

  const onSubmit = (event: any) => {
    if (event.answer === correctAnswer) {
      correct = true;
    }
    // send correct = true/false up as event
  };

  return (
    <div className="boolean">
      <div className="question">{question} {correctAnswer}</div>
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