import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface Multiple {
  question: string,
  answers: string[],
  handleSelectedAnswer: (event: any) => void;
}

export const Multiple: React.FC<Multiple> = (props) => {

  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [answers, setAnswers] = useState(['']);

  const { register, handleSubmit, errors } = useForm();

  const tempQuestion = 'Which company did Valve cooperate with in the creation of the Vive?';

  const tempAnswers = ["HTC",  "Oculus", "Google", "Razer"];

  const tempCorrectAnswer = "HTC";


  useEffect(() => {
    console.log('PROPS', props);
    // setQuestion(props.question);
    // setCorrectAnswer(props.correctAnswer);
    // setAnswers(props.answers);

    setQuestion(tempQuestion);
    setCorrectAnswer(tempCorrectAnswer);
    setAnswers(tempAnswers);

  }, []);

  const onSubmit = (event: any) => {
    props.handleSelectedAnswer(event.answer);
  };

  return (
    <div className="multiple">
      <div className="question">{question}</div>
      <form className="question-list" onSubmit={handleSubmit(onSubmit)}>
        {
          answers.map((answer, index) => {
          return (
            <label className="option" key={index}><input className="radio" type="radio" value={answer} name="answer" ref={register({ required: true })}/>{answer}</label>
          );
          })
        }
        <div className="error">
          {errors.answer && "ERROR: Selection is required"}
          </div>
        <button className="button" type="submit"><span className="button-text">Next</span></button>
      </form>
    </div>
  );
};