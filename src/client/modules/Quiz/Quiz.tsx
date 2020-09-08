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

    return (
    <div>
        {/* <Multiple question={props.multiple[0] && props.multiple[0].question} answers={props.multiple[0] && props.multiple[0].answers} correctAnswer={props.multiple[0] &&  props.multiple[0].correctAnswer}/> */}
        {/* <Boolean question={props.bool[0] && props.bool[0].question} correctAnswer={props.bool[0] && props.bool[0].correctAnswer} /> */}
        <TextQuestion question={props.text[0] && props.text[0].question} correctAnswer={props.text[0] && props.text[0].correctAnswer} />
    </div>
    );

};
