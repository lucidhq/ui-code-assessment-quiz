import React from "react";
import { percentage } from "../Utils";

type Props = {
    score: number;
    quizSize: number;
};

export const Summary: React.FC<Props> = ({ score, quizSize }) => {
    return (
        <div className='summary'>
            <h2>Summary</h2>
            <p>Correct: <strong>{score}</strong></p>
            <p>Wrong: <strong>{quizSize - score}</strong></p>
            <p>Questions Answered: <strong>{quizSize}</strong></p>
            <p>Final Score: <strong>{percentage(score, quizSize) + "%"}</strong> </p>
        </div>
    );
};

export default Summary;
