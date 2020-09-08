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

    const [currentQuestionObject, setCurrentQuestionObject] = useState({question: '', correctAnswer: ''});

    useEffect(() => {
        // Check to see if limit for each type of question is met
        // const types = [];
        // if (booleanCount < 2) {
        //     types.push('boolean')
        // }
        // if (textCount > 1) {
        //     types.push('text');
        // }

        // Randomly determine which type of question to select
        // setCurrentQuestionType(types[Math.floor(Math.random() * types.length)]);

        setCurrentQuestionType('text');

        // Set current question
        if (currentQuestionType === 'boolean') {

          const questionObject = {
              question: props.bool[booleanCount] ? props.bool[booleanCount].question : null,
              correctAnswer: props.bool[booleanCount] ? props.bool[booleanCount].correct_answer : null
          };

          setCurrentQuestionObject(questionObject);

        } if (currentQuestionType === 'text') {

          const questionObject = {
              question: props.text[textCount] ? props.text[textCount].question : null,
              correctAnswer: props.text[textCount] ? props.text[textCount].correct_answer : null
          };

          setCurrentQuestionObject(questionObject);
        }

        // Update question type counter - AFTER question is answered

        // if (currentQuestionType === 'boolean') {
        //     setBooleanCount(booleanCount + 1);
        //     console.log('BOOL COUNT', booleanCount);
        // } if (currentQuestionType === 'text') {
        //     setTextCount(textCount + 1);
        //     console.log('TEXT COUNT', textCount);
        // }


    }, [props, booleanCount, textCount]);
    
    return (
    <div>
        {currentQuestionType === 'boolean' && 
        <Boolean question={currentQuestionObject.question} correctAnswer={currentQuestionObject.correctAnswer} />}
        {currentQuestionType === 'text' && 
        <TextQuestion question={currentQuestionObject.question} correctAnswer={currentQuestionObject.correctAnswer} />}
        {/* <Multiple question={props.multiple[0] && props.multiple[0].question} answers={props.multiple[0] && props.multiple[0].answers} correctAnswer={props.multiple[0] &&  props.multiple[0].correctAnswer}/> */}
    </div>
    );

};
