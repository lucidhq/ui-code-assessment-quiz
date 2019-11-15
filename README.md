# Lucid UI code assessment

Welcome to the code assessment for the Lucid's UI Team.

Following we have some details about what we expect from you on this assessment. If you have any questions, feel free to reach us anytime.

## Application

The proposal of this exercise is to build a [React](https://reactjs.org) application based on a mockup design and the requirements below:

### Quiz App

The application proposed is a Quiz. Basically it's a user interface that shows a set of questions for a single user and allows it to enter/choose the answer for each question.

The Quiz can have 3 different types of questions:

- Multiple: a multiple-choice question (predefined answer options);
- Boolean: a "true or false" only answer;
- Text: an open text answer field;

The UI should fetch the questions data from an API (provided in this repository). More details in [API instructions](#api-instructions)

The application should display one question per time, randomly selected from the questions data set.  

When the user finishes the Quiz, the UI should display a summary page with the results, including: number of correct answers, number of wrong answers, a total of the questions answered and the final score (%). The summary page should also have a button to restart the Quiz with different questions.

### App Design

TODO: upload mockup image here

### Development instructions

This repository provides a React application bootstrap, to start the development you should first:
 
- Install dependencies:

```sh
npm install
```

- Run it locally

```sh
npm start
```

The command above will:

- Starts an HTTP server for the API (localhost, port 4000);
- Starts an HTTP server (powered by react-scripts) for the UI (client) (localhost, port 3000);

### API instructions

This repository provides a basic API (running under port 4000) that returns the required data for the application.
The API will be available after running the `npm start` command.  

#### GET Questions List

`http://localhost:4000/api/questions`
