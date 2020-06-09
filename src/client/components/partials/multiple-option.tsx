import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'

import {
  Question,
  HandleSubmit
} from '../../models/quiz-state';

export const MultipleOption = ({ question, handleQuizResult, selectedAnswer }: {
  question: Question, 
  handleQuizResult: HandleSubmit,
  selectedAnswer: string
}) => {
  const [ shuffledAnswers, setShuffledArr ] = useState([]);

  const shuffle = (arr: any) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  useEffect(() => {
    console.log(question);
    const shuffledArr = shuffle([...question.incorrect_answers, question.correct_answer])
    setShuffledArr(shuffledArr)
  }, [question.question])

  return (
    <Form>
      {shuffledAnswers.map((answer: string, idx: number) => {
        return (
          <Form.Check 
            type='radio' 
            label={answer} 
            key={`id-${idx}`} 
            checked={answer === selectedAnswer}
            onChange={() => handleQuizResult(answer, question.correct_answer)} 
          />);
      })}
    </Form>
  );
}
