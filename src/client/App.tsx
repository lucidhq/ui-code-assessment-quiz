import * as React from 'react';
import './styles/styles.css';
import { Quiz } from './modules/Quiz/Quiz';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const App = () => {
    const [questions, setQuestions] = useState([]);
    const [multiples, setMultiples] = useState([]);

    useEffect(() => { 

      axios.get('http://localhost:4000/api/questions')
      .then(res => {
        setQuestions(res.data);
        const data = res.data;

        let multiple = res.data.multiple;

        setMultiples(multiple);

        let newData: object = {
          multiple: res.data.multiple,
          
        };

        // for (let key in data) {
        //   if (key === 'multiple') {
        //     newData[multiple] = data[key]
        //   }
        // }

      })
      .catch( err => {
        console.log(err);
      });

    }, []);

    return ( 
    <div className="container">
      {/* {JSON.stringify(typeof questions.multiple)} */}
        <Quiz multiple={multiples} bool={questions} text={questions}/>
    </div>

    );
};
