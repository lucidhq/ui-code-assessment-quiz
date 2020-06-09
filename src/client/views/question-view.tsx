import React from "react";
import { QuestionText } from '../components/question-text';
import { AnswerOption } from '../components/answer-option';
import {
  Question,
  HandleSubmit
} from '../models/quiz-state';

export const QuestionView = ({ randomQuestion, handleSubmit }: {
  randomQuestion: Question,
  handleSubmit: HandleSubmit
}) => {
  return (
    <div>
      <QuestionText 
        text={randomQuestion.question} 
      />
      <AnswerOption 
        question={randomQuestion}
        handleQuizResult={handleSubmit}
      />
    </div>
  );
}
