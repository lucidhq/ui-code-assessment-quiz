import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface TextQuestion {
  question: string;
  correctAnswer: string;
  answerIsCorrect: boolean;
}

export const TextQuestion: React.FC<TextQuestion> = (props) => {

  const { register, handleSubmit, errors } = useForm();

  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);

  let correct = false;

  useEffect(() => {
    setQuestion(props.question);
    setCorrectAnswer(props.correctAnswer);
    setAnswerIsCorrect(props.answerIsCorrect);
  }, [props]);

  const onSubmit = (event: any) => {
    if (event.answer.toUpperCase() === correctAnswer.toUpperCase()) {
      setAnswerIsCorrect(true);
    }
  };

  return (
    <div className="text">
      <div className="question">{question}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input type="text" name="answer" ref={register({required: true})}/>
        </label>
        <div className="error">
          {errors.answer && "ERROR: Blank answers are not valid"}
          </div>
        <button className="button" type="submit"><span className="button-text">Next</span></button>
      </form>
    </div>
  );
};