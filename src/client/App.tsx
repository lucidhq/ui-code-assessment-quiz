import * as React from "react";
import { useEffect, useReducer } from "react";
import { configureAnswers, evaluateAnswers } from "../utils/questionUtils";
import QuestionForm from "./components/QuestionForm";
import QuestionContext from "./contexts/QuestionContext";

interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

// review types that have "any"
interface IState {
  questions: Question[];
  currentQuestion: Question | any;
  idx: number;
  answers: [] | any;
  currentAnswer: string | any;
  correctAnswers: number;
  incorrectAnswers: number;
  questionsAnswered: number;
  finalScorePercentage: number;
  isSummaryVisible: boolean;
}

const initialState: IState = {
  questions: [],
  currentQuestion: {},
  idx: 0,
  answers: [],
  currentAnswer: "",
  correctAnswers: 0,
  incorrectAnswers: 0,
  questionsAnswered: 0,
  finalScorePercentage: 0,
  isSummaryVisible: false,
};

const reducer = (state: any, action: any) => {
  // TODO: add type,payload destructuring here

  switch (action.type) {
    case "SET_DATA": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "ONCHANGE": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "NEXT_QUESTION": {
      return {
        ...state,
        ...action.payload,
        currentAnswer: "",
      };
    }
    case "RESTART_QUIZ": {
      // TODO: reset the state here. Could potentially pass a payload object...
      return {
        ...state,
        correctAnswers: 0,
        incorrectAnswers: 0,
        questionsAnswered: 0,
        finalScorePercentage: 0,
        isSummaryVisible: false,
      };
    }
    default:
      return state;
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentAnswer } = state

  const handleChange = (e: any, { value }: any) => {
    e.preventDefault();
    const payload = {
      currentAnswer: value,
    };

    return dispatch({ type: "ONCHANGE", payload });
  };

  const updateQuestion = (e: any) => {
    e.preventDefault();
    // TODO: Add error handling here
    // if currentValue.length < 1 then alert the user or show error component
    const nextIdx = state.idx + 1;
    const nextQuestion: any = state.questions[nextIdx];
    const questionsAnswered = state.questionsAnswered + 1;
    const evaluationPayload = evaluateAnswers(state);

    const payload: any = {
      idx: nextIdx,
      currentQuestion: nextQuestion,
      questionsAnswered,
      ...evaluationPayload,
    };
    // Try and remove this conditional
    if (nextQuestion.incorrect_answers) {
      payload.answers = configureAnswers(nextQuestion);
    }
    // if totalAnswered questions equals 5, or 50 if going through the entire list, show the summary page
    if (questionsAnswered === 5 || questionsAnswered === 50) {
      payload.isSummaryVisible = true;
    }

    return dispatch({ type: "NEXT_QUESTION", payload });
  };


  useEffect(() => {
    // TODO: move this to utils file and make a
    fetch("http://localhost:4000/api/questions")
      .then((res) => res.json())
      .then(({ results }: any) => {
        const questions = results;
        const currentQuestion = questions[0];
        const payload: any = {
          questions,
          currentQuestion,
        };
        // If question is not a text question then shuffle answers
        if (currentQuestion.incorrect_answers) {
          payload.answers = configureAnswers(currentQuestion);
        }

        return dispatch({ type: "SET_DATA", payload });
      })
      .catch((error) => console.error("Unable to retrieve data, please try again", error))
  }, []);

  return (
    <>
      <QuestionContext.Provider value={{ state, currentAnswer, handleChange, dispatch }}>
        {state.questions &&
        state.currentQuestion &&
        state.questions.length < 1 ? (
          <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            }}
          >
            Loading...
          </div>
        ) : (
          <div>
            <QuestionForm
              isSummaryVisible={state.isSummaryVisible}
              currentQuestion={state.currentQuestion}
              updateQuestion={updateQuestion}
            />
          </div>
        )}
      </QuestionContext.Provider>
    </>
  );
};
