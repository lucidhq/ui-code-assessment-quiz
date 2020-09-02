import React from 'react';


type Props = {
    question: string,
    quizPos: number,
    userChoice: string | null,
    correctAnswer: string,
    answerPool: string[],
    quizSize: number,
    callback:any 

}


export const QuestionDisplay: React.FC<Props> = ({
    question,
    quizPos,
    userChoice,
    correctAnswer,
    answerPool,
    quizSize}) => {
    return (
        <div> Question Display
            <h2>{question}</h2>
        </div>
    );
}

export default QuestionDisplay;