import React, { useState } from "react";
import QuestionDisplay from "./QuestionDisplay";
import { fetchQuizQuestions } from "../Api";
import Summary from "./Summary";
import '../styles/MainContainer.css'
export type quizObj = {
    quizPos: number;
    userChoice: string;
    gameOver: boolean;
    loading: boolean;
    quizSize: number;
    score: number;
    quizStarted: boolean;
    answered: boolean;
};

export type questionObj = {
    category: string;
    correct_answer: string;
    answers: string[];
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};

export const Main: React.FC = () => {
    const initialQuizState = {
        quizPos: 0,
        userChoice: "",
        gameOver: true,
        loading: false,
        quizSize: 10,
        score: 0,
        quizStarted: false,
        answered: false,
    };

    const [questionState, setQuestionState] = useState<questionObj[]>([]);
    const [quizState, setQuizState] = useState<quizObj>(initialQuizState);
    const {
        quizPos,
        userChoice,
        gameOver,
        loading,
        quizSize,
        score,
        quizStarted,
        answered,
    } = quizState;

    const scoreUpdate = (e: any) => {
        const selection= e.currentTarget.value;
        const correctAnswer = questionState[quizPos].correct_answer;

        selection.toLowerCase() === correctAnswer.toLowerCase()
            ? setQuizState({
                ...quizState,
                userChoice: selection,
                score: score + 1,
                answered: true,
            })
            : setQuizState({
                ...quizState,
                userChoice: selection,
                answered: true,
            });
    };

    const startQuiz = async () => {
        setQuizState({
            ...quizState,
            loading: true,
        });

        const quiz = await fetchQuizQuestions(quizSize);

        setQuestionState(quiz);
        setQuizState({
            ...quizState,
            loading: false,
            gameOver: false,
            quizStarted: true,
            score: 0,
        });
    };

    const nextQuestion = () => {
        quizPos < quizSize - 1
            ? setQuizState({
                ...quizState,
                quizPos: quizPos + 1,
                answered: false,
                userChoice: "",
            })
            : setQuizState({
                ...quizState,
                gameOver: true,
                quizPos: 0,
                answered: false,
                userChoice: "",
            });
    };

   /* const numberOfQuestions = (e: any) => {
        const num  = e.currentTarget.value
        setQuizState({...quizState, quizSize: num})
    }
    */
    return (
        <div className='main'>
            {gameOver && quizStarted ? (
                <Summary score={score} quizSize={quizSize} />
            ) : null}

            {!gameOver && !loading ? (
                <div className='questionGroup'>
                    <QuestionDisplay
                        next={nextQuestion}
                        question={questionState[quizPos].question}
                        userChoice={userChoice}
                        answerPool={questionState[quizPos].answers}
                        questionType={questionState[quizPos].type}
                        answered={answered}
                        callback={scoreUpdate}
                        correct={questionState[quizPos].correct_answer}
                    />
                    {answered ? (
                        <button className="btn" onClick={nextQuestion}>
                            Next
                        </button>
                    ) : null}
                </div>
            ) : (
                <div className='startGroup'>
                    {/*<p className='startNum'>Number of Questions:  <input type={'number'} defaultValue={10} max={50} min={1} onChange={numberOfQuestions}></input> </p>*/}
                   
                    <button className="btn" onClick={startQuiz}>
                        {!quizStarted ? "Start Quiz" : "Restart Quiz"}
                    </button>
                    </div>
                )}
        </div>
    );
};

export default Main;
