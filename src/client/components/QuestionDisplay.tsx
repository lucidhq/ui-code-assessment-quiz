import React from "react";
import { unescape } from "../Utils";
import '../styles/QuestionDisplay.css'

type Props = {
    question: string;
    userChoice: string;
    answerPool: string[];
    callback: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
    next: () => void;
    questionType: string;
    answered: boolean;
    correct: string;
};

export const QuestionDisplay: React.FC<Props> = ({
    question,
    questionType,
    userChoice,
    callback,
    next,
    correct,
    answered,
    answerPool,
}) => {

    const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        //it triggers by pressing the enter key
        if (e.nativeEvent.keyCode === 13) {
            next();
        }
    };

   
    return (
        <div className='quizWrapper'>
            <p className="question">{unescape(question)}</p>
           
            {questionType !== "text" ? (
                answerPool.map((answer, index) => {
                    const formatedAnswer = unescape(answer);
                    const correctChoice = formatedAnswer === unescape(correct)
                    const choiceMade = userChoice !== ""
                    const wrongChoice = userChoice === formatedAnswer && userChoice !== unescape(correct)
                    return (
                        <div   className='multiSelection' key={index}>
                            {correctChoice && choiceMade ? <span>&#10004;</span>:null }
                            {wrongChoice ?<span>&#10006;</span>:null }
                            <label>
                                <input
                                className='radio' 
                               
                              
                                    disabled={answered ? true : false}
                                    id="radioTrue"
                                    name="radio"
                                    type="radio"
                                    checked={userChoice === formatedAnswer}
                                    value={formatedAnswer}
                                    onChange={(e) => callback(e)}
                                />
                                {formatedAnswer}
                                
                            </label>
                        </div>
                    );
                })
            ) : 
                <div className='freeResponse'> 
                    {userChoice ===  correct?<span>&#10004;</span>:null }<label>
                        <input
                            className='textInput'
                            id="radioTrue"
                            name="response"
                            type={"text"}
                            value={userChoice}
                            onChange={(e) => callback(e)}
                            onKeyPress={handleKeypress}
                        />
                    </label>
                </div>
                }
                </div>
        
    );
};

export default QuestionDisplay;
