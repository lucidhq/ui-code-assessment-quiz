import React from "react";
import { percentage } from "../Utils";

type Props = {
    score: number;
    quizSize: number;
};

export const Summary: React.FC<Props> = ({ score, quizSize }) => {
    return (
        <div>
            <h2>Summary</h2>
            <p>Correct: {score}</p>
            <p>Wrong: {quizSize - score}</p>
            <p>Questions Answered: {quizSize}</p>
            <p>Final Score: {percentage(score, quizSize) + "%"} </p>
        </div>
    );
};

export default Summary;
