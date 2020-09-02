import React from "react";
import { unescape } from "../Utils";

type Props = {
    question: string;
    userChoice: string;
    answerPool: string[];
    callback: (
        e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLInputElement>
    ) => void;
    next: () => void;
    questionType: string;
    answered: boolean;
};

export const QuestionDisplay: React.FC<Props> = ({
    question,
    questionType,
    userChoice,
    callback,
    next,
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
        <div>
            <h2>{unescape(question)}</h2>

            {questionType !== "text" ? (
                answerPool.map((answer, index) => {
                    const formatedAnswer = unescape(answer);
                    return (
                        <div key={index}>
                            <label id="answerlabel" htmlFor="radioTrue" className="container">
                                <input
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
            ) : (
                    <label>
                        <input
                            id="radioTrue"
                            name="response"
                            type={"text"}
                            value={userChoice}
                            onChange={(e) => callback(e)}
                            onKeyPress={handleKeypress}
                        />
                    </label>
                )}
        </div>
    );
};

export default QuestionDisplay;
