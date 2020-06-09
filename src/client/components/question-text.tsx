import React, { useState, useEffect } from 'react';

export const QuestionText = (props: any) => {
  const [ questionText, setQuestionTxt ] = useState('');

  useEffect(() => {
    const text = props.text.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
    setQuestionTxt(text);
  }, [props.text])

  return (
    <div>
      {questionText}
    </div>
  );
}
