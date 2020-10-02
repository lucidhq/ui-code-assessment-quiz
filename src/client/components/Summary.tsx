import React, { useContext } from 'react'
import { Button, Container, Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { configureAnswers } from '../../utils/questionUtils';
import QuestionContext from '../contexts/QuestionContext'


const SummaryPage = () => {
  const { state, dispatch }: any = useContext(QuestionContext);
  const {
    questions,
    idx,
    correctAnswers,
    incorrectAnswers,
    questionsAnswered,
    finalScorePercentage,
  } = state;

  const restartQuiz = () => {
    // handle if the
    const nextIdx = idx + 1;
    let nextQuestion = questions[nextIdx];
    // basic
    if (nextQuestion === undefined || idx >= questions.length) {
      nextQuestion = questions[0];
    }

    const payload: any = {
      currentQuestion: nextQuestion,
      idx: nextIdx,
      currentAnswer: "",
      correctAnswers: 0,
      incorrectAnswers: 0,
      questionsAnswered: 0,
      finalScorePercentage: 0,
      isSummaryVisible: false,
    };

    if (nextQuestion.incorrect_answers) {
      payload.answers = configureAnswers(nextQuestion);
    }

    return dispatch(({ type: 'RESTART_QUIZ', payload }));
  }

  return (
    <>
      <Container>
        <Grid columns={1}>
          <GridRow>
            <GridColumn>
              <h2>Summary</h2>
              <p>
                Correct: <strong> {correctAnswers} </strong>
              </p>
              <p>
                Incorrect: <strong> {incorrectAnswers} </strong>
              </p>
              <p>
                Total Answered: <strong> {questionsAnswered} </strong>
              </p>
              <p>
                Final Score: <strong> {finalScorePercentage}% </strong>
              </p>
              <Button type="text" primary onClick={restartQuiz}> Restart Quiz </Button>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </>
  )
}

export default SummaryPage
