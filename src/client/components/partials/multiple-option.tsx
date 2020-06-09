import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'

import {
  Question,
  HandleSubmit
} from '../../models/quiz-state';

export const MultipleOption = ({ question, handleQuizResult }: {
  question: Question, 
  handleQuizResult: HandleSubmit
}) => {
  const [ shuffledAnswers, setShuffledArr ] = useState([])

  const shuffle = (arr: any) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  useEffect(() => {
    const shuffledArr = shuffle([...question.incorrect_answers, question.correct_answer])
    setShuffledArr(shuffledArr)
  }, [])

  return (
    <Form>
      {shuffledAnswers.map((answer: string) => (
        <Form.Check 
          type='radio'
          label={answer}
        />
      ))}
    </Form>
  );
}
