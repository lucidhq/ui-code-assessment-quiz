import React, { useEffect, useState } from 'react';
import { Questions } from '../Questions/Questions';

interface Props {
    bool: Array<any>,
    multiple: Array<any>,
    text: Array<any>
}

export const Quiz: React.FC<Props> = (props) => {

    return (
    <div>
        {JSON.stringify(props.multiple[0])}
        {JSON.stringify(props.bool[0])}
        {JSON.stringify(props.text[0])}
    </div>
    );

};
