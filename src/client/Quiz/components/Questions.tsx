import React from 'react';
import { Question } from './Question/Question';

export const Questions: React.FC <{questions: object}> = ({questions}) => {
    // console.log('QUESTIONS', questions);
    
    return (
        <div>
            test
            <Question />
        </div>
    );

    // questions && questions.map ( (question: any) => {
    //     return (
    //         <div>
    //             {question}
    //         </div>
    //         );
    // } );

};
