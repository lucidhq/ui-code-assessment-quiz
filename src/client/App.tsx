import * as React from 'react';
import './styles/styles.css';
import { Quiz } from './modules/Quiz/Quiz';
import { useState, useEffect } from 'react';

export const App = () => {
    const [questions, setQuestions] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4000/api/questions')
        .then(res => res.json())
        .then(setQuestions)
        .catch(console.log);
    }, []);


    return ( 
    <div className="container">
        <Quiz props={questions}/>
    </div>
    )
};
