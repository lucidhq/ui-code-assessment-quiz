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

    return (
    <div>
        {JSON.stringify(textQuestions)}
    </div>
    );

};
