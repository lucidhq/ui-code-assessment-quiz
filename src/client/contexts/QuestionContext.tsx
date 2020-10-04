import { createContext } from "react"

// maybe play around with creating an HOC for the entire app
const QuestionContext = createContext({});
QuestionContext.displayName = 'QuestionContext';

export default QuestionContext;
