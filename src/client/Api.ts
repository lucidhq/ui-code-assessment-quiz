export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  };
  
  export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
  }
  
  export type QuestionsState = Question & { answers: string[] };
  export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
  
export const fetchQuizQuestions = async  (amount: number) => {
    const endpoint = `http://localhost:4000/api/questions`;
    const data = await (await fetch(endpoint)).json();
    const quiz = shuffleArray(data.results).slice(0,amount )
    const q2:any = quiz.map((question: Question) => {
      return question.type === 'text' ?  question: {...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])} 
    })
  

    return q2
  
  };