import React, { useState } from 'react';
import { Question } from '../Question/Question';

export const Questions: React.FC <{questions: object}> = ({questions}) => {
    // console.log('QUESTIONS', questions);

    // create question state

    // const [question, setQuestionData] = useState(questions[Math.floor(Math.random() * questions.length)]);
    
    return (
        <div>
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
