import React, { useState } from 'react';
import QuestionDisplay from './QuestionDisplay';

export type quizObj = {
    question: string,
    quizPos: number,
    userChoice: string | null,
    correctAnswer: string,
    answerPool: string[],
    gameOver: boolean,
    loading: boolean,
    quizSize: number,
    score: number

}

export type questionObj = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;



}

export const Main: React.FC = () => {
const initialQuizState = {
        question: "Can you dig it?",
        quizPos: 0,
        userChoice: null,
        correctAnswer: 'Yes, yes I can',
        answerPool: ['No', 'Ill try my best', 'Yes, yes I can', 'Dig what?'],
        gameOver: true,
        loading: false,
        quizSize: 10,
        score: 0
    
    }



const [questionState, setQuestionState] = useState<questionObj[]>([]);
const [quizState, setQuizState] = useState<quizObj>(initialQuizState);
const {question, quizPos, userChoice, correctAnswer, answerPool, gameOver, loading, quizSize, score} = quizState;


const scoreUpdate = (e: any) => {
    const selection = e.currentTarget.value;
    selection === correctAnswer ? setQuizState(
        {...quizState, score: score + 1, quizPos: quizPos + 1}):
        setQuizState({...quizState, quizPos: quizPos + 1});

};

const startQuiz = () => {
    console.log('start')
}

const nextQuestion = () => {
    console.log('next')
}







    return (
        <div>
             <button className='start' onClick={startQuiz}>
            Start
          </button>
          <button className='next' onClick={nextQuestion}>
            Start
          </button>
            <QuestionDisplay question={question}
            quizPos={quizPos}
            userChoice={userChoice}
            correctAnswer={correctAnswer}
            answerPool={answerPool}
            quizSize={quizSize} 
            callback={scoreUpdate}/>

        </div>
    )
}

export default Main