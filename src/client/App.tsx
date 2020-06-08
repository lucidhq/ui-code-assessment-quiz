import React, { useState, useEffect } from "react";
import { QuizContext } from './context/quiz-context';
import { 
  INIT_QUIZ, 
  SELECT_RANDOM_QUESTION, 
} from './models';
import { QuestionView } from './views/question-view';
import { ResultsView } from './views/results-view';
import { QuizButton } from './components/quiz-button';
import { AnswerOption } from './components/answer-option';

export const App = () => {
    const showResults = false;
    const { dispatch } = React.useContext(QuizContext);

    async function getQuestions(): Promise<void> {
      const response = await fetch(`http://localhost:4000/api/questions`);
      response.json()
      .then((data) => {
        dispatch({
          type: INIT_QUIZ,
          results: data.results
        })
        dispatch({ 
          type: SELECT_RANDOM_QUESTION 
        })
      })
      .catch(err => console.error(err))
    }

    useEffect(() => {
      getQuestions()
    }, [])

    return (
      <div style={{ display: 'flex', flexDirection: 'column', padding: '20%' }}>
        { !showResults ? <QuestionView /> : <ResultsView /> }
          <QuizButton />
      </div>
    );
    
}
