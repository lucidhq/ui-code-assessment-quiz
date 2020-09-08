import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface TextQuestion {
  question: string;
  correctAnswer: string;
}

export const TextQuestion: React.FC<TextQuestion> = (props) => {

  const { register, handleSubmit, errors } = useForm();

  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  let correct = false;

  useEffect(() => {
    setQuestion(props.question);
    setCorrectAnswer(props.correctAnswer);
  }, [props]);

  const onSubmit = (event: any) => {
    if (event.answer.toUpperCase() === correctAnswer.toUpperCase()) {
      correct = true;
    }
    // send correct = true/false up as event
  };

  return (
    <div className="text">
      <div className="question">{question}</div>
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