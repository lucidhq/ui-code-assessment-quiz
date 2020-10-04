import React, { useContext } from 'react'
import { Button, Container, Grid, GridColumn, GridRow } from 'semantic-ui-react'
import QuestionContext from '../contexts/QuestionContext'


const SummaryPage = () => {
  const { state, dispatch }: any = useContext(QuestionContext);
  const {
    correctAnswers,
    incorrectAnswers,
    questionsAnswered,
    finalScorePercentage,
  } = state;

  const restartQuiz = () => {
    const payload: any = {
      currentAnswer: "",
      correctAnswers: 0,
      incorrectAnswers: 0,
      questionsAnswered: 0,
      finalScorePercentage: 0,
      isSummaryVisible: false,
    };

    return dispatch(({ type: 'RESTART_QUIZ', payload }));
  }

  return (
    <>
      <Container data-testid="summary">
        <Grid columns={1}>
          <GridRow>
            <GridColumn>
              <h2>Summary</h2>
              <p data-testid="correct-answers">
                Correct:<strong> {correctAnswers} </strong>
              </p>
              <p data-testid="incorrect-answers">
                Wrong:<strong> {incorrectAnswers} </strong>
              </p>
              <p data-testid="total-answered">
                Total Answered:<strong> {questionsAnswered} </strong>
              </p>
              <p data-testid="final-score-percentage">
                Final Score:<strong> {finalScorePercentage}% </strong>
              </p>
              <Button
                data-testid="restart-btn"
                type="text"
                primary
                onClick={restartQuiz}
              >
                Restart Quiz
              </Button>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </>
  )
}

export default SummaryPage
