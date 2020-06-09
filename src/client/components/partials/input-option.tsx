import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'

import {
  Question,
  HandleSubmit
} from '../../models/quiz-state';

export const InputOption = ({ question, handleQuizResult, selectedAnswer }: {
  question: Question, 
  handleQuizResult: HandleSubmit,
  selectedAnswer: string
}) => {
  const [ inputVal, setInputValue ] = useState('')

  useEffect(() =>{
    setInputValue('')
  }, [question.question]);

  return (
    <Form.Group>
      <Form.Control 
        type="text"
        value={inputVal}
        onChange={(e) => {
          const val = e.currentTarget.value;
          setInputValue(val);
          handleQuizResult(val)
        }} 
      />
    </Form.Group>
  );
}
