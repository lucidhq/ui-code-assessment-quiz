import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Questions } from '../Questions/Questions';

export const Quiz = ({props} : any) => {

    const [booleans, setBooleans] = useState([]);
    const [multiples, setMultiples] = useState([]);
    const [textQuestions, setTextQuestions] = useState([]);

    useEffect(() => {
        setBooleans(props.booleans);
        console.log('BOOLEANS', booleans);
    }, [props]);

    useEffect(() => {
        setMultiples(props.multiples);
    }, [props]);

    useEffect(() => {
        setTextQuestions(props.textQuestions);
    }, [props]);

    return (
    <div>
      {JSON.stringify(props)}
    </div>
    );

};
