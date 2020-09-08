import React, { useEffect, useState } from 'react';
import { Questions } from '../Questions/Questions';

interface Props {
    bool: Array<any>,
    multiple: Array<any>,
    text: Array<any>
}

export const Quiz: React.FC<Props> = (props) => {

    const [booleans, setBooleans] = useState([]);
    // const [multiples, setMultiples] = useState([]);
    const [textQuestions, setTextQuestions] = useState([]);

    useEffect(() => {
        // setBooleans(props.bool);
    }, [booleans]);

    // useEffect(() => {
    //     setMultiples(multiples);
    // }, [multiples]);

    useEffect(() => {
        setTextQuestions(textQuestions);
    }, [textQuestions]);

    return (
    <div>
        {JSON.stringify(props.multiple[0])}
    </div>
    );

};
