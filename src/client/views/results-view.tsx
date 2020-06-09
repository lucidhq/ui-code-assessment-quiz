import React from "react";
import { IQuizResults } from '../models/quiz-state';

export const ResultsView = ({ quizResults }: {
  quizResults: IQuizResults
}) => {
  const row = { display: 'flex' }

  const { correct, wrong } = quizResults;
  const answered: number = correct + wrong;
  const score: number = Math.round(correct / answered * 100) || 0;

  return (
    <div style={{ float: 'left' }}>
      <div style={row}> SUMMARY </div>
      <br />
      <div style={row}> Correct: {correct} </div>
      <div style={row}> Wrong: {wrong} </div>
      <div style={row}> Questions answered: {answered} </div>
      <div style={row}> Final Score: {score}% </div>
    </div>
  );
}
