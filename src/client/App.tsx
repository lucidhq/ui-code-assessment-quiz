import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';

import { QuestionView } from './views/question-view';
import { ResultsView } from './views/results-view';
import { QuizButton } from './components/quiz-button';

export const App = () => {
    const showResults = true;
    const [ questions, setQuestions ] = useState([] as any)

    async function getQuestions(): Promise<void> {
      const response = await fetch(`http://localhost:4000/api/questions`);
      response.json()
      .then((data) => {
        setQuestions(data.results);
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
