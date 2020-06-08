import React from "react";

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
  }

  componentWillMount() {
    this.getQuestions()
  }

  async getQuestions(): Promise<void> {
    const response = await fetch(`http://localhost:4000/api/questions`);
    response.json()
    .then((data) => {
      const { results } = data,
       idx = Math.floor(Math.random() * results.length),
       randomQues = results[idx];
      results.splice(idx, 1);

      this.setState({
        questionList: results,
        randomQuestion: randomQues,
        askedQuestions: [randomQues],
        counter: 1,
      })
    })
    .catch(err => console.error(err))
  }

  public render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', padding: '20%' }}>
          Lucid
          Welcome to UI Team code assessment!
      </div>
    );
  }
}
