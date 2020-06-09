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
        correctAnswer: '',
        incorrectAnswer: []
      },
      askedQuestions: [],
      counter: 0,
      quizResults: {
        correctAnswer: 0,
        wrongAnswer: 0
      },
      showResults: false

    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
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
    })

  }

  showResults() {
    const { questionList, askedQuestions } = this.state;
    const originalList = questionList.concat(askedQuestions);

    this.setState({
      questionList: originalList,
      askedQuestions: [],
      counter: 0,
      showResults: true
    })
  }

  handleButtonClick() {
    const { counter, showResults } = this.state;

    if(counter === QUIZ_SIZE) {
      this.showResults();
    } else if(showResults && counter === 0) {
      this.setState({
        showResults: false
      })
      this.selectRandomQuestion();
    }
    else {
      this.selectRandomQuestion();
    }
  }

  handleQuizResults(answer: string, correctAnswer: string) {
    if(answer === correctAnswer) {
      this.setState({
        correctAnswer: this.state.correctAnswer + 1
      })
    } else {
      this.setState({
        wrongAnswer: this.state.wrongAnswer + 1
      })
    }
  }

  public render() {
    const { showResults } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', padding: '15%', overflow: 'hidden' }}>
        { !showResults ? 
          <QuestionView 
            randomQuestion={this.state.randomQuestion} 
            handleSubmit={this.handleQuizResults}
          /> 
          : 
          <ResultsView /> 
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
