import * as React from 'react';
import { useState, useEffect } from 'react';
import { unescapeStr } from '../utils/questionUtils'

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

  useEffect(() => {
    fetch('http://localhost:4000/api/questions')
      .then(res => res.json())
      .then(q => {
        const data: any = q.results;
        const firstQuestion: any = data[0];
        console.log(unescapeStr(firstQuestion.question));
        setQuestions(data);
        setCurrentQuestion(firstQuestion);
      })
      .catch(error => console.error('unable to retrieve data at this time please try again', error))
  }, [])



  return (
    <>
      {(questions && currentQuestion) && questions.length < 1
        ? <div>Loading...</div>
        : <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>{unescapeStr(currentQuestion.question)}</h1>
            <button>Next</button>
          </div>
      }
    </>
  );
}
