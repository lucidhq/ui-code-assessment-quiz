import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'

import {
  Question,
  HandleSubmit
} from '../../models/quiz-state';

export const TRUE ='True';
export const FALSE ='False';

export const BooleanOption = ({ question, handleQuizResult }: {
  question: Question, 
  handleQuizResult: HandleSubmit
}) => {

  return (
    <Form>
      <Form.Check type='radio'id={TRUE} label={TRUE} />
      <Form.Check type='radio'id={FALSE} label={FALSE} />
    </Form>
  );
}
