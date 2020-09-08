import React, { useEffect, useState } from 'react';
import { Question } from '../Question/Question';
import { Multiple } from '../../components/Multiple/Multiple';
import { Boolean } from '../../components/Boolean/Boolean';
import { TextQuestion } from '../../components/TextQuestion/TextQuestion';


export const Quiz = ({ props } : any) => {

    const [questions, setQuestions] = useState(props);
    const [questionSet, setQuestionSet] = useState([]);
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [summaryData, setSummaryData] = useState({correct: 0, incorrect: 0});

    useEffect(() => {
        setQuestions(props);
    }, [props]);

    // Set question set
    useEffect(() => {
      setQuestionSet(questions[currentSetIndex]);
    }, [questions]);

    // useEffect(() => {
    //     console.log('QUESTIONS ZERO', questions);
    //     setQuestionSet(questions[currentSetIndex]);
    //     console.log('QUESTION SET', questionSet);
    // }, []);

    return (
    <div>
        {JSON.stringify(questionSet)}
        {/* {questionSet[currentQuestionIndex]['type'] === 'multiple' ? <Multiple /> : null }
        {questionSet[currentQuestionIndex]['type'] === 'boolean' ? <Boolean /> : null }
        {questionSet[currentQuestionIndex]['type'] === 'text' ? <TextQuestion /> : null } */}
        
        {/* <button className="button"><span className="button-text">Next</span></button> */}
    </div>
    );

};
