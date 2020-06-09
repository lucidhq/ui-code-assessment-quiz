import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'

import {
  Question,
  HandleSubmit
} from '../../models/quiz-state';

export const InputOption = ({ question, handleQuizResult }: {
  question: Question, 
  handleQuizResult: HandleSubmit
}) => {

  return (
    <Form.Group>
      <Form.Control type="text" />
    </Form.Group>
  );
}
