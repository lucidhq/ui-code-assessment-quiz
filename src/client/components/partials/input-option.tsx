import React from 'react';
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

  return (
    <Form.Group>
      <Form.Control 
        type="text" 
        onChange={(e) => handleQuizResult(e.currentTarget.value)} 
      />
    </Form.Group>
  );
}
