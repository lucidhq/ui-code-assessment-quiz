import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface Multiple {
  question: string,
  correctAnswer: string,
  answers: string[]
}

export const Multiple: React.FC<Multiple> = (props) => {

  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [answers, setAnswers] = useState([]);

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    console.log('PROPS', props);
    setQuestion(props.question);
    setCorrectAnswer(props.correctAnswer);
    // setAnswers(props.answers);

  }, [question, correctAnswer, answers]);

  let correct = false;

  const onSubmit = (event: any) => {
    if (event.answer === correctAnswer) {
      correct = true;
    }
    // send correct = true/false up as event
  };

  return (
    <div className="multiple">
      <div className="question">{question}</div>
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