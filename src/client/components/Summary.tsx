import React from 'react'
import { Button, Container, Grid, GridColumn, GridRow } from 'semantic-ui-react'


const SummaryPage = () => {
  return (
    <>
      <Container>
        <Grid columns={1}>
          <GridRow>
            <GridColumn>
              <h2>Summary</h2>
              <p>
                Correct: <strong> 0 </strong>
              </p>
              <p>
                Incorrect: <strong> 3 </strong>
              </p>
              <p>
                Total Answered: <strong> 3 </strong>
              </p>
              <p>
                Final Score: <strong> 0% </strong>
              </p>
              <Button type="text" primary> Restart Quiz </Button>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </>
  )
}

export default SummaryPage
