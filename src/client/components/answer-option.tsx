import React, { useEffect } from 'react';
import { MultipleOption } from '../components/partials/multiple-option';
import { InputOption } from '../components/partials/input-option';
import {
  Question,
  HandleSubmit
} from '../models/quiz-state';

export const AnswerOption = ({ question, handleQuizResult }: {
  question: Question, 
  handleQuizResult: HandleSubmit
}) => {

  let answerOptions = null;
    switch(question.type) {
      case 'multiple':
        answerOptions = (<MultipleOption question={question} handleNext={handleQuizResult}/>);
        break;
      case 'boolean':
        answerOptions = (<MultipleOption question={question} handleNext={handleQuizResult}/>);
        break;
      case 'text':
        answerOptions = (<InputOption question={question} handleNext={handleQuizResult}/>);
        break;
      default:
        break;
    }

  return (
    <div style={{ margin: '10px 0px' }}>
      {answerOptions}
    </div>
  );
}
