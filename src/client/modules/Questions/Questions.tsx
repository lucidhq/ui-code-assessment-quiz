import React, { useState, useEffect } from 'react';
import { Multiple } from '../../components/Multiple/Multiple';
import { Boolean } from '../../components/Boolean/Boolean';
import { TextQuestion } from '../../components/TextQuestion/TextQuestion';

export const Questions = ({props} : any) => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [summaryData, setSummaryData] = useState({correct: 0, incorrect: 0});

    useEffect(() => {
        console.log('PROPS', props);

    }, [props])
    
    return (
        <div>
        </div>
    );

};
