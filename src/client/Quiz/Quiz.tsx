import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Quiz = () => {

    useEffect(() => {
      axios.get('http://localhost:4000/api/questions')
        .then( res => {
            console.log('RESULT', res);
        })
        .catch( err => {
            console.log('ERROR', err);
        });
    });

    return (
    <div>
        Quiz
    </div>
    );

};
