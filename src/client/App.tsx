import * as React from "react";
import Question from "./components/Question";

//TODO: Remove this hardcoded array when I'm pulling in data from GraphQL
const questions = [
  {
    question:
      "Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?",
    type: "multiple",
    correct_answer: "Rad Mobile",
    incorrect_answers: ["Sonic The Hedgehog", "Super Mario 64", "Mega Man"],
  },
  {
    question: "Igneous rocks are formed by excessive heat and pressure.",
    type: "boolean",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    type: "multiple",
    correct_answer: "HTC",
    incorrect_answers: ["Oculus", "Google", "Razer"],
  },
  {
    question: "The idea of Socialism was articulated and advanced by whom?",
    type: "multiple",
    correct_answer: "Karl Marx",
    incorrect_answers: ["Vladimir Lenin", "Joseph Stalin", "Vladimir Putin"],
  },
  {
    question: "What color/colour is a polar bear&#039;s skin?",
    type: "text",
    correct_answer: "Black",
    incorrect_answers: null,
  },
];

export const App: React.FC = () => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <h1>Lucid</h1>
    <h2>Welcome to UI Team code assessment!</h2>
    <Question questions={questions} />
  </div>
);
