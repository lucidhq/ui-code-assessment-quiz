import React, { useEffect, useState } from 'react';
import { Question } from '../Question/Question';
import { Multiple } from '../../components/Multiple/Multiple';
import { Boolean } from '../../components/Boolean/Boolean';
import { TextQuestion } from '../../components/TextQuestion/TextQuestion';


export const Quiz = (questions: any) => {

    console.log('QUESTIONS', questions);

    // const [questions, setQuestions] = useState([]);
    // const [questionSet, setQuestionSet] = useState([]);
    // const [currentSetIndex, setCurrentSetIndex] = useState(0);
    // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // const [currentQuestion, setCurrentQuestion] = useState({});
    // const [summaryData, setSummaryData] = useState({correct: 0, incorrect: 0});

    // // Get all questions
    // useEffect(() => {
    //     fetch('http://localhost:4000/api/questions')
    //     .then(res => res.json())
    //     .then(setQuestions)
    //     .catch(console.log);
    // }, []);

    // // Set current question set
    // useEffect(() => {
    //     console.log('QUESTIONS', questions);
    // }, [currentSetIndex]);

    return (
    <div>
        {/* {JSON.stringify(questions)} */}
        {/* {questionSet[currentQuestionIndex]['type'] === 'multiple' ? <Multiple /> : null }
        {questionSet[currentQuestionIndex]['type'] === 'boolean' ? <Boolean /> : null }
        {questionSet[currentQuestionIndex]['type'] === 'text' ? <TextQuestion /> : null } */}
        
        <button className="button"><span className="button-text">Next</span></button>
    </div>
    );

};
