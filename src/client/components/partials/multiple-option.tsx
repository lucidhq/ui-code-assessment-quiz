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

  return (
    <Form>
      <Form.Check 
        type='radio'
      />
    </Form>
  );
}
