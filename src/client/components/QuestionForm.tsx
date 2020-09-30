import React from 'react'
import { Container, Button, Form } from 'semantic-ui-react'
import TrueFalse from './TrueFalse'
import MultipleChoice from './MultipleChoice'
import ShortAnswer from './ShortAnswer'
import { unescapeStr } from '../../utils/questionUtils'

// TODO: move answers array to a context for global consumption
// TODO: move QUESTION_TYPES enum out of component scope after context is created
const QuestionForm = ({ currentQuestion, currentAnswer, handleChange, answers, updateQuestion }: any) => {
  const { type } = currentQuestion;
  const question = unescapeStr(currentQuestion.question);

  const QUESTION_TYPES: any = {
    boolean: (
      <TrueFalse currentAnswer={currentAnswer} handleChange={handleChange} />
    ),
    multiple: (
      <MultipleChoice
        currentAnswer={currentAnswer}
        handleChange={handleChange}
        answers={answers}
      />
    ),
    text: (
      <ShortAnswer currentAnswer={currentAnswer} handleChange={handleChange} />
    ),
  };


  return (
    <>
      <Container textAlign="left">
        <Form onSubmit={updateQuestion}>
          <h3>{question}</h3>
          <div style={{ marginBottom: '10px' }}>
          {QUESTION_TYPES[type]}
          </div>
          <Button type="submit" primary>Next</Button>
        </Form>
      </Container>
    </>
  )
}

export default QuestionForm
