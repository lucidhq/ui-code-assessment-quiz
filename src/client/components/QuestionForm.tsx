import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button, Form } from 'semantic-ui-react'
import TrueFalse from './TrueFalse'
import MultipleChoice from './MultipleChoice'
import ShortAnswer from './ShortAnswer'
import SummaryPage from './Summary'
import { unescapeStr } from '../../utils/questionUtils'


const QuestionForm = ({ updateQuestion, state }: any) => {
  const { currentAnswer, currentQuestion, isSummaryVisible } = state;
  const { type } = currentQuestion;
  const question = unescapeStr(currentQuestion.question);
  const isDisabled = currentAnswer.length < 1;

  const QUESTION_TYPES: any = {
    boolean: <TrueFalse />,
    multiple: <MultipleChoice />,
    text: <ShortAnswer />,
  };


  return (
    <>
      {isSummaryVisible
        ? <SummaryPage />
        : <Container textAlign="left">
            <Form data-testid="question-form" onSubmit={updateQuestion}>
              <h3 data-testid="question-text">{question}</h3>
              <div data-testid={type} className="question-type" style={{ marginBottom: '10px' }}>
                {QUESTION_TYPES[type]}
              </div>
              <Button
                data-testid="next-btn"
                type="submit"
                primary
                disabled={isDisabled}
              >
                Next
              </Button>
            </Form>
          </Container>
      }
    </>
  )
}

QuestionForm.propTypes = {
  updateQuestion: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
}

export default QuestionForm
