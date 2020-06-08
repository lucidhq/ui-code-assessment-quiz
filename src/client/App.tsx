import React, { useState, useEffect, FunctionComponent } from "react";
import { QuizContext } from './context/quiz-context';
import { QuestionView } from './views/question-view';
import { ResultsView } from './views/results-view';
import { QuizButton } from './components/quiz-button';

export const App: FunctionComponent = () => {
    const { dispatch } = React.useContext(QuizContext);
    const [ questions, setQuestions ] = useState([]);
    const [ randomQuestion, setRandomQuestion ] = useState({});
    const [ showResults, shouldShowResults] = useState(false);

    async function getQuestions(): Promise<void> {
      const response = await fetch(`http://localhost:4000/api/questions`);
      response.json()
      .then((data) => {
        setQuestions(data.results)
      })
      .catch(err => console.error(err))
    }

    useEffect(() => {
      getQuestions()
    }, [])

    useEffect(() => {
      const idx = Math.floor(Math.random() * questions.length);
      setRandomQuestion(questions[idx])
    })

    return (
      <div style={{ display: 'flex', flexDirection: 'column', padding: '20%' }}>
        { !showResults ? <QuestionView /> : <ResultsView /> }
        <QuizButton />
      </div>
    );
    
}
