import React from "react";

export const QUIZ_SIZE = 5;

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
      showResults: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.getQuestions()
  }

  async getQuestions(): Promise<void> {
    const response = await fetch(`http://localhost:4000/api/questions`);
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
    } else if(showResults){
      this.restartQuiz();
    } else {
      this.selectRandomQuestion();
    }
  }

  public render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', padding: '20%' }}>
          Lucid
          Welcome to UI Team code assessment!
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
