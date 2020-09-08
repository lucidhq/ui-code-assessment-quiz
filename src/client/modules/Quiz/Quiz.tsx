import React, { useEffect, useState } from 'react';
import { Questions } from '../Questions/Questions';
import { Multiple } from '../../components/Multiple/Multiple';

interface Props {
    bool: Array<any>,
    multiple: Array<any>,
    text: Array<any>
}

export const Quiz: React.FC<Props> = (props) => {

    return (
    <div>
        {JSON.stringify(typeof props.multiple[0])}
        <Multiple question={props.multiple[0] && props.multiple[0].question} answers={props.multiple[0] && props.multiple[0].answers} correctAnswer={props.multiple[0] &&  props.multiple[0].correctAnswer}/>
        {/* {JSON.stringify(props.bool[0])}
        {JSON.stringify(props.text[0])} */}
    </div>
    );

};
