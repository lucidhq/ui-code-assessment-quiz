import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Question } from '../Question/Question';


export const Quiz = () => {

    useEffect(() => {
      axios.get('http://localhost:4000/api/questions')
        .then( res => {
            setQuestions(res.data);
           
        })
        .catch( err => {
            console.error('ERROR', err);
        });

        // console.log('QUESTIONS', questions);

        setQuestionSet(questions[currentSet]);
        // console.log('QUESTION SET', questionSet);

        // console.log('CURRENT QUESTION', questionSet[currentQuestion]);

    });

    const [questions, setQuestions] = useState([]);
    const [questionSet, setQuestionSet] = useState([]);
    const [currentSet, setCurrentSet] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [summaryData, setSummaryData] = useState({correct: 0, incorrect: 0});

    return (
    <div>
        {/* <Question question={questionSet[currentQuestion]} /> */}
    </div>
    );

};
