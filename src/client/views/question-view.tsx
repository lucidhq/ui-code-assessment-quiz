import React from "react";
import { QuestionText } from '../components/question-text';
import { AnswerOption } from '../components/answer-option';

export const QuestionView = () => {
  return (
    <div>
      <QuestionText />
      <AnswerOption />
    </div>
  );
}
