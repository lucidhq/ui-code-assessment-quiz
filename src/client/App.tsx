import React from "react";
import { QuestionView } from './views/question-view';
import { ResultsView } from './views/results-view';

export const QUIZ_SIZE = 3;
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
    const idx = Math.floor(Math.random() * list.length),
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

  }

  resetQuiz() {
    const { questionList, askedQuestions } = this.state;
    const originalList = questionList.concat(askedQuestions);

    this.setState(initialState, () => {
      this.selectRandomQuestion()
      this.setState({
        showResults: false
      })
    });
  }

  trackResults() {
    const { randomQuestion, selectedAnswer, correct, wrong } = this.state;
    const c = correct;
    const w = wrong;

    if(selectedAnswer && randomQuestion.correct_answer === selectedAnswer) {
      this.setState({
        correct: c + 1
      })
    } else {
      this.setState({
        wrong: w + 1
      })
    }
  }

  handleButtonClick(e: any) {
    e.preventDefault();
    const { counter, showResults } = this.state;

    this.trackResults()
    if(counter !== QUIZ_SIZE) {
      this.selectRandomQuestion();
    } else if(counter === QUIZ_SIZE && showResults === false) {
      this.setState({
        showResults: true,
        selectedAnswer: ''
      })
    } else if(counter === QUIZ_SIZE && showResults === true) {
      this.setState({
        showResults: false,
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
        { !showResults ? 
          <QuestionView
            selectedAnswer={selectedAnswer} 
            randomQuestion={randomQuestion} 
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
