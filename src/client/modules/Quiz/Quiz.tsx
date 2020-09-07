import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Questions } from '../Questions/Questions';

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
    });

    const [questions, setQuestions] = useState([]);
    const [questionSet, setQuestionSet] = useState([]);
    const [summaryData, setSummaryData] = useState({correct: 0, incorrect: 0});

    return (
    <div>
        <Questions questions={questionSet}/>
    </div>
    );

};
