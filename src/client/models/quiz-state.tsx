export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  incorrectAnswer: string[];
}

export type QuizState = {
  questionList: Question[];
  randomQuestion: Question | null;
	askedQuestions: Question[];
  showResults: boolean;
}

export type QuizActions =  
| { type: 'INIT_QUIZ', results: Question[] }  
| { type: 'SELECT_RANDOM_QUESTION' }  
| { type: 'SUBMIT_QUIZ' }
| { type: 'RESTART_QUIZ' };
