import React from "react";
import { QuestionText } from '../components/question-text';
import { AnswerOption } from '../components/answer-option';
import {
  Question,
  HandleSubmit
} from '../models/quiz-state';

export const QuestionView = ({ randomQuestion, handleSubmit, selectedAnswer }: {
  randomQuestion: Question,
  handleSubmit: HandleSubmit,
  selectedAnswer: string
}) => {

  return (
    <div>
      <QuestionText 
        text={randomQuestion.question} 
      />
      <AnswerOption 
        selectedAnswer={selectedAnswer}
        question={randomQuestion}
        handleQuizResult={handleSubmit}
      />
    </div>
  );
}
