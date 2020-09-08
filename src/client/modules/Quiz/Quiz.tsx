import React, { useEffect, useState } from 'react';
import { Questions } from '../Questions/Questions';
import { Multiple } from '../../components/Multiple/Multiple';
import { Boolean } from '../../components/Boolean/Boolean';
import { TextQuestion } from '../../components/TextQuestion/TextQuestion';


export const Quiz = ({ props } : any) => {

    const [questions, setQuestions] = useState(props);
    const [booleans, setBooleans] = useState({});
    const [multiples, setMultiples] = useState({});
    const [textQuestions, setTextQuestions] = useState({});

    const [currentQuestion, setCurrentQuestion] = useState({});
    const [boolCounter, setBoolCounter] = useState({});
    const [multiCounter, setMultiCounter] = useState({});
    const [textQuestionCounter, setTextQuestionCounter] = useState({});

    useEffect(() => {
        setQuestions(props);
    }, [props]);

    useEffect(() => {
        setBooleans(props.boolean);
    }, [props]);

    useEffect(() => {
        setMultiples(props.multiple);
    }, [props]);

    useEffect(() => {
        setTextQuestions(props.text);
    }, [props]);

    const getCurrentQuestion = () => {

        const questionsFromType = [];
        let questionType;

        if (boolCounter < 2) {
            questionsFromType.push('boolean');
        } if (multiCounter < 9) {
            questionsFromType.push('multiple');
        } if (textQuestionCounter < 1) {
            questionsFromType.push('text');
        }

        // if (!questionsFromType.length) {
        // // if there are no items in the array, there are no questions left
        // } if (questionsFromType.length === 1) {
        //     questionType = questionsFromType[0];
        // } else {
        //     questionType = questionsFromType[Math.floor(Math.random() * questionsFromType.length)];
        // }
    };

    return (
    <div>
        {JSON.stringify(booleans)}
    </div>
    );

};
