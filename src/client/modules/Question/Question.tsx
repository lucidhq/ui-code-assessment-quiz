import React from 'react';
import { Multiple } from '../../components/Multiple/Multiple';
import { Boolean } from '../../components/Boolean/Boolean';
import { TextQuestion } from '../../components/TextQuestion/TextQuestion';

export const Question: React.FC <{question: any}> = (question) => {
    // console.log('QUESTIONS', questions);
    
    return (
        <div>
            {/* <TextQuestion /> */}
            {/* <Multiple/> */}
             {/* <br />
             <Boolean />
             <br />
            <TextQuestion /> */}
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
