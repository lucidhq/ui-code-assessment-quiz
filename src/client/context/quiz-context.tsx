import React, { createContext, Dispatch, useContext } from "react";
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
  counter: 0,
  showResults: false,
};

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
