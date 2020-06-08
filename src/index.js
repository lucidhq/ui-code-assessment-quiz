import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './client/App';
import { QuizContext } from './client/context/quiz-context';

ReactDOM.render(
  <QuizContext>
    <App />
  </QuizContext>, 
  document.getElementById('root'));
