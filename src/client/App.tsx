import * as React from 'react';
import { useState, useEffect } from 'react';
//TODO: clean up imports
import { Button } from 'semantic-ui-react'
import { unescapeStr, configureAnswers } from '../utils/questionUtils'
// import TrueFalse from './components/TrueFalse'
import ShortAnswer from './components/ShortAnswer'
import MultipleChoice from './components/MultipleChoice'
import Summary from './components/Summary'
import QuestionForm from './components/QuestionForm'

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
const initialState = {
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
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setOption] = useState<selected>('');
  const [idx, setIdx] = useState(0);
  const [totalAnswered, setTotal] = useState(0);

  const handleChange = (e: any): void => {
    e.preventDefault();
    return setOption(e.target.name);
  }

  const updateQuestion = (e: any) => {
    e.preventDefault();
    const nextIdx = idx + 1;
    const nextQuestion: any = questions[nextIdx];
    let updateAnswersList: any;
    // Try and remove this conditional
    if (nextQuestion.incorrect_answers) {
      updateAnswersList = configureAnswers(nextQuestion);
      setAnswers(updateAnswersList);
    } else {
      setAnswers(nextQuestion);
    }
    // if totalAnswered questions equals 5 show the summary page
    if (totalAnswered === 5) {
      // set summary page to be visible
    }
    setIdx(nextIdx);
    setCurrentQuestion(questions[nextIdx]);
  }
  // function for resetting the state of the quiz
  // const resetQuiz = () => {
  //   // reset the state
  //   // set the visibility of the summary component to false
  // }

  useEffect(() => {
    // TODO: move this to utils file and make a
    fetch('http://localhost:4000/api/questions')
      .then(res => res.json())
      .then(q => {
        const data: any = q.results;
        const firstQuestion: any = data[0];
        console.log(unescapeStr(firstQuestion.question));
        // TODO make this into a reducer to fix multiple re-renders
        if (firstQuestion.incorrect_answers) {
          setAnswers(configureAnswers(firstQuestion));
        }
        setCurrentQuestion(firstQuestion);
        setQuestions(data);
      })
      .catch(error => console.error('unable to retrieve data at this time please try again', error))
  }, []);



  return (
    <>
      {questions && currentQuestion && questions.length < 1 ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          >
            <QuestionForm
              currentQuestion={currentQuestion}
              answers={answers}
              updateQuestion={updateQuestion}
            />
          {/* <h3>{unescapeStr(currentQuestion.question)}</h3> */}
          {/* <TrueFalse selectedOption={selectedOption} handleChange={handleChange} /> */}
          {/* <ShortAnswer /> */}
          {/* <MultipleChoice answers={answers} />
            <Button type="submit" primary>
              Next
            </Button> */}
        </div>
      )}
      <br />
      <br />
      <Summary />
    </>
  );
}
