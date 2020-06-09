import React from 'react';
import Form from 'react-bootstrap/Form'

import {
  Question,
  HandleSubmit
} from '../../models/quiz-state';

export const TRUE ='True';
export const FALSE ='False';

export const BooleanOption = ({ question, handleQuizResult, selectedAnswer }: {
  question: Question, 
  handleQuizResult: HandleSubmit,
  selectedAnswer: string
}) => {
  const options = [TRUE, FALSE]

  return (
    <Form>
      {options.map((answer: string, idx: number) => {
        return (
          <Form.Check 
            type='radio' 
            label={answer} 
            key={`id-${idx}`} 
            checked={answer === selectedAnswer}
            onChange={() => {handleQuizResult(answer)}} 
          />);
      })}
    </Form>
  );
}
