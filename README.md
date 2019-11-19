# Lucid UI Code Assessment

Welcome to the code assessment for Lucid's UI Team.

This README details what we expect from you on this assessment. If you have any questions, feel free to reach out anytime.

## Application

The goal of this exercise is to build a [React](https://reactjs.org) application based on a mockup design and the requirements below:

### Quiz App

The application is a Quiz interface - a user interface that shows a set of questions and lets the user select an answer for each one.

The Quiz includes three different types of questions:

- Multiple: a multiple-choice question (predefined answer options)
- Boolean: a "true or false" only answer
- Text: an open-ended text answer

### Requirements

1. The UI should fetch the questions data from an API (provided in this repository). More details in [API instructions](#api-instructions)

2. The application should display one question per time, randomly selected from the questions data set.  

3. When the user finishes the Quiz, the UI should display a summary page with the results, including: number of correct answers, number of wrong answers, a total of the questions answered and the final score (%). The summary page should also have a button to restart the Quiz with different questions.

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
