import * as React from 'react';
import { useState, useEffect } from 'react';
//TODO: clean up imports
import { Button } from 'semantic-ui-react'
import { unescapeStr, configureAnswers } from '../utils/questionUtils'
// import TrueFalse from './components/TrueFalse'
import ShortAnswer from './components/ShortAnswer'
import MultipleChoice from './components/MultipleChoice'

interface Question {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

interface IState {
  questions: Question[],
  currentQuestion: Question | any,
  correctAnswers: number,
  incorrectAnswers: number,
  questionsAnswered: number,
  finalScorePercentage: number,
}

type selected = string | null;

/*
initialState = {
  questions: [],
  currentQuestion: {},
  correctAnswers: 0,
  incorrectAnswers: 0,
  questionsAnswered: 0,
  finalScorePercentage: 0,
}
*/


export const App = () => {
  const [questions, setQuestions] = useState<Question[] | []>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | any>({});
  const [selectedOption, setOption] = useState<selected>('');
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
  // TODO: move this to utils file and make a
    fetch('http://localhost:4000/api/questions')
      .then(res => res.json())
      .then(q => {
        const data: any = q.results;
        const firstQuestion: any = data[0];
        console.log(unescapeStr(firstQuestion.question));
        // TODO make this into a reducer to fix multiple setState re-renders
        setAnswers(configureAnswers(firstQuestion));
        setCurrentQuestion(firstQuestion);
        setQuestions(data);
      })
      .catch(error => console.error('unable to retrieve data at this time please try again', error))
  }, [])

  const handleChange = (e: any): void => {
    e.preventDefault();
    return setOption(e.target.name);
  }


  return (
    <>
      {(questions && currentQuestion) && questions.length < 1
        ? <div>Loading...</div>
        : <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>{unescapeStr(currentQuestion.question)}</h3>
          {/* <TrueFalse selectedOption={selectedOption} handleChange={handleChange} /> */}
          {/* <ShortAnswer /> */}
          <MultipleChoice answers={answers} />
            <button>Next</button>
          </div>
      }
    </>
  );
}
