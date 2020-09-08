import React, { useEffect, useState } from 'react';
import { Questions } from '../Questions/Questions';
import { Multiple } from '../../components/Multiple/Multiple';
import { Boolean } from '../../components/Boolean/Boolean';
import { TextQuestion } from '../../components/TextQuestion/TextQuestion';

interface Props {
    bool: Array<any>,
    multiple: Array<any>,
    text: Array<any>
}

export const Quiz: React.FC<Props> = (props) => {

    const [currentQuestionType, setCurrentQuestionType] = useState('');
    const [booleanCount, setBooleanCount] = useState(0);
    const [textCount, setTextCount] = useState(0);

    const [currentQuestionObject, setCurrentQuestionObject] = useState({question: '', correctAnswer: []});
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState('');

    useEffect(() => {
        // Check to see if limit for each type of question is met
        const types = [];
        if (booleanCount < 2) {
            types.push('boolean')
        }
        if (textCount > 1) {
            types.push('text');
        }

        // Randomly determine which type of question to select
        setCurrentQuestionType(types[Math.floor(Math.random() * types.length)]);

        // Set current question
        if (currentQuestionType === 'boolean') {
            console.log('BOOLEAN COUNT', booleanCount);

            let q = props.bool[booleanCount] ? props.bool[booleanCount].question : null;
            let a = props.bool[booleanCount] ? props.bool[booleanCount].correct_answer : null;

            setCurrentQuestion(q);
            setCurrentCorrectAnswer(a);

        //   const questionObject = {
        //       question: q,
        //       correctAnswer: props.bool
        //   };

        //   console.log(questionObject);

        //   setCurrentQuestionObject(questionObject);

        } if (currentQuestionType === 'text') {
            setCurrentQuestionObject(props.text[textCount]);          
        }

        // Update question type counter - AFTER question is answered

        // if (currentQuestionType === 'boolean') {
        //     setBooleanCount(booleanCount + 1);
        //     console.log('BOOL COUNT', booleanCount);
        // } if (currentQuestionType === 'text') {
        //     setTextCount(textCount + 1);
        //     console.log('TEXT COUNT', textCount);
        // }


    }, [props, booleanCount, currentQuestionObject]);
    
    return (
    <div>
        {JSON.stringify(currentCorrectAnswer)}
        {currentQuestionType === 'boolean' && 
        <Boolean question={currentQuestion} correctAnswer={currentCorrectAnswer} />}
        {/* <Multiple question={props.multiple[0] && props.multiple[0].question} answers={props.multiple[0] && props.multiple[0].answers} correctAnswer={props.multiple[0] &&  props.multiple[0].correctAnswer}/> */}
        {/* <Boolean question={props.bool[0] && props.bool[0].question} correctAnswer={props.bool[0] && props.bool[0].correctAnswer} /> */}
        {/* <TextQuestion question={props.text[0] && props.text[0].question} correctAnswer={props.text[0] && props.text[0].correctAnswer} /> */}
    </div>
    );

};
