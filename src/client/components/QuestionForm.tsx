import React from 'react'
import { Container, Button, Form } from 'semantic-ui-react'
import TrueFalse from './TrueFalse'
import MultipleChoice from './MultipleChoice'
import ShortAnswer from './ShortAnswer'
import { unescapeStr } from '../../utils/questionUtils'

// const QUESTION_TYPES: any = {
//   boolean: <TrueFalse />,
//   multiple: <MultipleChoice />,
//   text: <ShortAnswer />
// }

// TODO: move answers array to a context for global consumption
// TODO: move QUESTION_TYPES enum out of component scope after context is created
const QuestionForm = ({ currentQuestion, answers, updateQuestion }: any) => {
  const { type } = currentQuestion;
  const question = unescapeStr(currentQuestion.question);

  const QUESTION_TYPES: any = {
    boolean: <TrueFalse />,
    multiple: <MultipleChoice answers={answers} />,
    text: <ShortAnswer />,
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
