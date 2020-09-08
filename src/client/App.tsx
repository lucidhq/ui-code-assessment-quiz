import * as React from 'react';
import './styles/styles.css';
import { Quiz } from './modules/Quiz/Quiz';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const App = () => {
    const [multiples, setMultiples] = useState([]);
    const [booleans, setBooleans] = useState([]);
    const [textQuestions, setTextQuestions] = useState([]);

    useEffect(() => { 

      axios.get('http://localhost:4000/api/questions')
      .then(res => {
        let multiple = res.data.multiple;
        let bool = res.data.boolean;
        let textQuestions = res.data.text;

        setMultiples(multiple);
        setBooleans(bool);
        setTextQuestions(textQuestions);

      })
      .catch( err => {
        console.log(err);
      });

    }, []);

    return ( 
    <div className="container">
      {/* {JSON.stringify(typeof questions.multiple)} */}
        <Quiz multiple={multiples} bool={booleans} text={textQuestions}/>
    </div>

    );
};
