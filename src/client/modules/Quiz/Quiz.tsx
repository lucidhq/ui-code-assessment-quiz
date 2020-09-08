import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Question } from '../Question/Question';


export const Quiz = () => {

    useEffect(() => {
      axios.get('http://localhost:4000/api/questions')
        .then( res => {
            setQuestions(res.data);
            setQuestionSet(questions[0]);
           
        })
        .catch( err => {
            console.error('ERROR', err);
        });

        // console.log('QUESTIONS', questions);
        // console.log('QUESTION SET', questionSet);
    
    });

    const [questions, setQuestions] = useState([]);
    const [questionSet, setQuestionSet] = useState([]);
    const [summaryData, setSummaryData] = useState({correct: 0, incorrect: 0});

    return (
    <div>
        <Question />
    </div>
    );

};
