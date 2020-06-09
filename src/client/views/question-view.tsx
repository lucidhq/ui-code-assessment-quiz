import React from "react";
import { QuestionText } from '../components/question-text';
import { AnswerOption } from '../components/answer-option';

export const QuestionView = (props: any) => {
  return (
    <div>
      <QuestionText 
        text={props.randomQuestion && props.randomQuestion.question} 
      />
      <AnswerOption />
    </div>
  );
}
