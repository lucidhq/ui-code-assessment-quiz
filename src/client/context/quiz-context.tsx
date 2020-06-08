import React, { useReducer, createContext, Dispatch, useContext } from "react";
import {
  QuizState,
  QuizActions,
  INIT_QUIZ,
  SELECT_RANDOM_QUESTION,
  SUBMIT_QUIZ,
  RESTART_QUIZ
} from '../models';

const initialState: QuizState = {
  questionList: [],
	randomQuestion: null,
	askedQuestions: [],
  showResults: false,
};

export const QuizContext = createContext<{
  state: QuizState,
  dispatch: Dispatch<QuizActions>;
}> ({
  state: initialState,
  dispatch: () => null
});

const quizReducer = (state: QuizState, action: QuizActions): QuizState => {

  switch (action.type) {
    case INIT_QUIZ:
      return {
        ...state, 
        questionList: action.results,
      };
    case SELECT_RANDOM_QUESTION:
      const { questionList, askedQuestions } = state;
      const idx = Math.floor(Math.random() * state.questionList.length);
      const ranQuestion = state.questionList[idx];
      state.askedQuestions.push(ranQuestion);
      state.questionList.splice(idx, 1);

      return {
        ...state, 
        questionList: questionList,
        randomQuestion: ranQuestion,
        askedQuestions: askedQuestions,
      };
    case SUBMIT_QUIZ:
      const originalList = state.questionList.concat(state.askedQuestions);

      return {
        questionList: originalList,
        randomQuestion: null,
        askedQuestions: [],
        showResults: true,
      };
      return state;
    case RESTART_QUIZ:
      return {
        ...state,
        showResults: true,
      };
    default:
      return state;
  }
};

const QuizStateProvider: React.FC = ({ children }) => {
  const { state, dispatch } = useContext(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

