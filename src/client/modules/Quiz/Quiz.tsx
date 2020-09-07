import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Questions } from '../Questions/Questions';

export const Quiz = () => {

    useEffect(() => {
      axios.get('http://localhost:4000/api/questions')
        .then( res => {
            setQuestionsData(res.data);
           
        })
        .catch( err => {
            console.error('ERROR', err);
        });
    });

    // Create questions state
    const [questions, setQuestionsData] = useState([]);

    // console.log(questions);

    return (
    <div>
        <Questions questions={questions}/>
    </div>
    );

};
