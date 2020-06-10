import React from "react";
import { QuestionView } from './views/question-view';
import { ResultsView } from './views/results-view';

export const NUM_QUESTIONS = 5;
export const GET_QUIZ_API = `http://localhost:4000/api/questions`;

export const initialState = {
  questionList: [],
      randomQuestion: {
        category: '',
        type: '',
        difficulty: '',
        question: '',
        correct_answer: '',
        incorrect_answers: []
      },
      askedQuestions: [],
      counter: 0,
      correct: 0,
      wrong: 0,
      selectedAnswer: '',
}

export default class App extends React.Component<{}, any> { 
  constructor(props: any){
    super(props);
    this.state = { ...initialState, showResults: false };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleQuizResults = this.handleQuizResults.bind(this);
  }

  componentWillMount() {
    this.getQuestions()
  }

  async getQuestions(): Promise<void> {
    const response = await fetch(GET_QUIZ_API);
    response.json()
    .then((data) => {

      this.setState({
        questionList: data.results
      }, () => {
        this.selectRandomQuestion()
      })
    })
    .catch(err => console.error(err))
  }

  selectRandomQuestion() {
    const list = this.state.questionList;
    const idx = Math.floor(Math.random() * NUM_QUESTIONS),
      count = this.state.counter,
      randomQuestion = list[idx],
      questionList = [...list.slice(0, idx), ...list.slice(idx + 1)],
      askedQuestions = this.state.askedQuestions.concat(randomQuestion),
      counter =  count + 1;

    this.setState({
      questionList, 
      randomQuestion,
      askedQuestions,
      counter,
      selectedAnswer: ''
    })

    if(this.state.showResults){
      this.setState({
        showResults: false
      });
    }

  }

  trackResults() {
    const { randomQuestion, selectedAnswer, correct, wrong } = this.state;

    if(selectedAnswer) {
      if(randomQuestion.correct_answer === selectedAnswer) {
        this.setState({
          correct: correct + 1
        })
      } else {
        this.setState({
          wrong: wrong + 1
        })
      }
    }
  }

  shouldSubmit(counter: number, showResults: boolean) {
    const { questionList } = this.state;
     return (counter === NUM_QUESTIONS && showResults === false )|| questionList.length === 0 || questionList.length < NUM_QUESTIONS;
  }

  handleButtonClick(e: any) {
    e.preventDefault();
    const { counter, showResults } = this.state;

    this.trackResults()
    if(counter !== NUM_QUESTIONS) {
      this.selectRandomQuestion();
    } else if(this.shouldSubmit(counter, showResults)) {
      this.setState({
        showResults: true,
        selectedAnswer: ''
      })
    } else if(counter === NUM_QUESTIONS && showResults === true) {
      this.setState({
        counter: 0,
        correct: 0,
        wrong: 0,
        selectedAnswer: '',
      }, () => this.selectRandomQuestion())      
    }
  }

  handleQuizResults(answer: string) {
    this.setState({
      selectedAnswer: answer
    })
  }

  public render() {
    const { showResults, randomQuestion, selectedAnswer, correct, wrong } = this.state;
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', padding: '15%', overflow: 'hidden' }}>
        { !showResults && randomQuestion ? 
          <QuestionView
            selectedAnswer={selectedAnswer} 
            randomQuestion={randomQuestion && randomQuestion} 
            handleSubmit={this.handleQuizResults}
          /> 
          : 
          <ResultsView quizResults={{ correct, wrong }} /> 
        }
        <button 
          style={{ 
            backgroundColor: 'dodgerblue', 
            border: 'none', 
            width: '25%',
            color: 'white',
            margin: '20px 0px'
          }}
          onClick={this.handleButtonClick}
        >
          { !showResults ? 'Next' : 'Restart Quiz'}
        </button>
      </div>
    );
  }
}
