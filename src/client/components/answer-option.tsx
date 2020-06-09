import React, { useEffect } from 'react';
import { 
  BooleanOption, 
  InputOption, 
  MultipleOption 
} from '../components/partials';
import {
  Question,
  HandleSubmit
} from '../models/quiz-state';

export const AnswerOption = 
({ question, handleQuizResult }: {
  question: Question, 
  handleQuizResult: HandleSubmit
}) => {

  let answerOptions = null;
    switch(question.type) {
      case 'multiple':
        answerOptions = (<MultipleOption question={question} handleQuizResult={handleQuizResult}/>);
        break;
      case 'boolean':
        answerOptions = (<BooleanOption question={question} handleQuizResult={handleQuizResult}/>);
        break;
      case 'text':
        answerOptions = (<InputOption question={question} handleQuizResult={handleQuizResult}/>);
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
