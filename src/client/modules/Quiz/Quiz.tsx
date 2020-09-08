import React, { useEffect, useState } from 'react';
import { Questions } from '../Questions/Questions';
import { Multiple } from '../../components/Multiple/Multiple';
import { Boolean } from '../../components/Boolean/Boolean';
import { TextQuestion } from '../../components/TextQuestion/TextQuestion';


export const Quiz = ({ props } : any) => {

    const [questions, setQuestions] = useState(props);
    const [questionSet, setQuestionSet] = useState([]);
    const [currentSetIndex, setCurrentSetIndex] = useState(0);

    useEffect(() => {
        setQuestions(props);
    }, [props]);

    // Set question set
    useEffect(() => {
      setQuestionSet(questions[currentSetIndex]);
    }, [questions]);

    // // Set current question
    // useEffect(() => {
    //     setCurrentQuestion(questionSet[currentQuestionIndex]);
    // }, [questionSet]);

    // useEffect(() => {
    //     console.log('QUESTIONS ZERO', questions);
    //     setQuestionSet(questions[currentSetIndex]);
    //     console.log('QUESTION SET', questionSet);
    // }, []);

    return (
    <div>
        {/* {JSON.stringify(questionSet[0])} */}
      <Questions props={questionSet} />
    </div>
    );

};
