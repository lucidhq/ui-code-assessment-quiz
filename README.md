# Lucid UI Code Assessment

Welcome to the code assessment for Lucid's UI Team.

This README details what we expect from you on this assessment. If you have any questions, feel free to reach out anytime.

Please, use this repository to fork the project into your account and submit the link to us (by email) with the final solution when done.

## Application

The purpose of this exercise is to build a [React](https://reactjs.org) application based on the provided mockups and requirements below:

### Quiz App

The application is a Quiz interface - a UI that shows a set of questions and lets the user select an answer for each one.

The Quiz features three different types of questions. Use the included mockups as references for styling.

**Multiple**   
A multiple-choice question (predefined answer options)

![](./mockups/multiple.png)


**Boolean**   
A "true or false" only answer question

![](./mockups/boolean.png)

**Text**   
An open-ended text question

![](./mockups/text.png)

### Requirements

1. The UI should fetch the questions data from an API (provided in this repository). More details in [API instructions](#api-instructions)

2. The application should display one question per time, randomly selected from the set of questions.  
   
3. When the user finishes the Quiz, the UI should display a summary page with the results, including:

- Number of correct answers
- Number of incorrect answers
- Total number of questions answered
- The final score (%)
- A button to restart the Quiz with a different questions

A reference mockup for the summary page is depicted below:

![](./mockups/summary.png)

### Setup

This repo provides a React application bootstrap. To get setup, run these commands:
 
- Install dependencies:

```sh
npm install
```

- Run it locally

```sh
npm start
```

The command above will:

- Start an HTTP server for the API (localhost:4000);
- Start an HTTP server (powered by react-scripts) for the front-end (localhost:3000);

### API instructions

This repository provides a basic API (running under port 4000) that returns the required data for the application.
The API will be available after running the `npm start` command.  

#### GET Questions List

`http://localhost:4000/api/questions`

---

# QUIZZ

I reshaped a little bit the structure of the folder by using yarn workspaces, as I found it very powerful for maintaining multi packages repo. I took the liberty to use graphQL as my protocol for communicating between the client and the server.

# Usage

In order to launch the server and the client please make sure you are at the root of the project:

## Install all the dependencies

- Once at the root of the project you can simply run:

```
yarn install
or
npm install
```

## Start the server & client

- By running this command, it will launch simultaneously the gateway on port `4000` and the client on port `3000`

```
yarn start
or
npm start
```

_PS: you can get the playground by opening `localhost:4000/graphql` in your browsers ;-)_

## Tech Stack

- react
- react-dom
- react-router
- graphql
- apollo-server
- apollo-client
- apollo-cache-inmemory
- apollo-link-http
- emotionjs
- jest
- enzyme
- uuid

Just to name a few.

## Test

- For running test be sure you are at the root of the project and run:

```
yarn test
or
npm test
```