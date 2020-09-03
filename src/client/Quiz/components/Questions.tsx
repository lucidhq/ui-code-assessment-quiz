import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Questions = (questions: any) => {

    questions && questions.map ( (question: any) => {
        return (
            <div>
                {question}
            </div>
            );
    } )

};
