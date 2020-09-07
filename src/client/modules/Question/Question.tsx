import React from 'react';
import { Multiple } from '../../components/Multiple/Multiple';
import { Boolean } from '../../components/Boolean/Boolean';
import { TextQuestion } from '../../components/TextQuestion/TextQuestion';

export const Question: React.FC <{}> = () => {
    // console.log('QUESTIONS', questions);

    const question: object = {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"easy",
        "question":"Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?",
        "correct_answer":"Rad Mobile",
        "incorrect_answers":[
          "Sonic The Hedgehog",
          "Super Mario 64",
          "Mega Man"
        ]
    };
    
    return (
        <div>
            <Multiple/>
             {/* <br />
            <Boolean />
             <br />
            <TextQuestion /> */}
            <div className="button">
            <button><span className="button-text">Next</span></button>
            </div>
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
