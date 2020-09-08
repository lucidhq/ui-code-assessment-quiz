import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Question } from '../Question/Question';
import { Multiple } from '../../components/Multiple/Multiple';
import { Boolean } from '../../components/Boolean/Boolean';
import { TextQuestion } from '../../components/TextQuestion/TextQuestion';


export const Quiz = () => {

    const [data, setData] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [questionSet, setQuestionSet] = useState([]);
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [summaryData, setSummaryData] = useState({correct: 0, incorrect: 0});

    // Get all questions
    // useEffect(() => {
    //   axios.get('http://localhost:4000/api/questions')
    //     .then( res => {
    //         setQuestions(res.data);
           
    //     })
    //     .catch( err => {
    //         console.error('ERROR', err);
    //     });
    // });

    useEffect(() => {
        fetch('http://localhost:4000/api/questions')
        .then(res => res.json())
        .then(setData)
        .catch(console.log);

    //    setCurrentQuestion(questionSet[currentQuestionIndex]);
    }, [questions]);

    return (
    <div>
        {JSON.stringify(data)}
        {/* {questionSet[currentQuestionIndex]['type'] === 'multiple' ? <Multiple /> : null }
        {questionSet[currentQuestionIndex]['type'] === 'boolean' ? <Boolean /> : null }
        {questionSet[currentQuestionIndex]['type'] === 'text' ? <TextQuestion /> : null } */}
        
        <button className="button"><span className="button-text">Next</span></button>
    </div>
    );

};
