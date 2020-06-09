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
    this.handleClick = this.handleClick.bind(this);
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
    const { questionList } = this.state;
    const idx = Math.floor(Math.random() * questionList.length),
      randomQues = questionList[idx];
      this.state.askedQuestions.push(randomQues);
      questionList.splice(idx, 1);

    this.setState({
      randomQuestion: randomQues,
      counter: this.state.counter + 1,
    })
  }

  submitQuiz() {
    this.setState({
      showResults: true
    })
  }

  restartQuiz(){
    const { questionList, askedQuestions } = this.state;
    const originalList = questionList.concat(askedQuestions);

    this.setState({
      questionList: originalList,
      askedQuestions: [],
      counter: 0,
      showResults: false
    })
  }

  handleClick() {
    const { counter, showResults } = this.state;

    if(counter === QUIZ_SIZE) {
      this.submitQuiz();
    } if(showResults){
      this.restartQuiz();
    } else {
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
    const { randomQuestion, showResults } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', padding: '20%' }}>
          { !showResults ? 
            <QuestionView 
              randomQuestion={randomQuestion} 
              handleQuizResults={this.handleQuizResults}
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
            onClick={this.handleClick}
          >
            Next
          </button>
      </div>
    );
  }
}
