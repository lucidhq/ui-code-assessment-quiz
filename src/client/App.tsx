import React from "react";
import { QuestionView } from './views/question-view';
import { ResultsView } from './views/results-view';

export const QUIZ_SIZE = 5;
export const GET_QUIZ_API = `http://localhost:4000/api/questions`;

export default class App extends React.Component<{}, any> { 
  constructor(props: any){
    super(props);
    this.state = {
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
      quizResults: {
        correct: 0,
        wrong: 0
      },
      selectedAnswer: '',
      showResults: false

    }
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
    const idx = Math.floor(Math.random() * list.length),
      randomQuestion = list[idx],
      questionList = [...list.slice(0, idx), ...list.slice(idx + 1)],
      askedQuestions = this.state.askedQuestions.concat(randomQuestion),
      counter = this.state.counter + 1;

    this.setState({
      questionList, 
      randomQuestion,
      askedQuestions,
      counter,
      selectedAnswer: ''
    })

  }

  showResults() {
    const { questionList, askedQuestions } = this.state;
    const originalList = questionList.concat(askedQuestions);

    this.setState({
      questionList: originalList,
      askedQuestions: [],
      counter: 0,
      quizResults: {
        correct: 0,
        wrong: 0
      },
      showResults: true
    })
  }

  trackResults() {
    const { randomQuestion, selectedAnswer, quizResults } = this.state;

    randomQuestion.correct_answer === selectedAnswer ? quizResults.correct++ : quizResults.wrong++;
  }

  handleButtonClick(e: any) {
    e.preventDefault();
    const { counter, showResults, selectedAnswer } = this.state;
    
    if(counter === QUIZ_SIZE) {
      this.showResults();
    } else if(showResults && counter === 0) {
      this.setState({
        showResults: false
      })
      this.selectRandomQuestion();
    } else {
      if(selectedAnswer) {
        this.trackResults();
      }
      this.selectRandomQuestion();
    }
  }

  handleQuizResults(answer: string) {
    this.setState({
      selectedAnswer: answer
    })
  }

  public render() {
    const { showResults, randomQuestion, quizResults, selectedAnswer } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', padding: '15%', overflow: 'hidden' }}>
        { !showResults ? 
          <QuestionView
            selectedAnswer={selectedAnswer} 
            randomQuestion={randomQuestion} 
            handleSubmit={this.handleQuizResults}
          /> 
          : 
          <ResultsView quizResults={quizResults} /> 
        }
        <button 
          style={{ 
            backgroundColor: 'dodgerblue', 
            border: 'none', 
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
