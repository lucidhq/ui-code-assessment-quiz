const express = require('express');
const cors = require('cors');

const data = require('./data.json');

// create server
const server = express();
const port = 4000;

const shuffle = (data) => {
  for (let i = data.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
};

const sortDataByType = (data) => {
    return data.reduce((seed, current) => {
        if (!seed[current.type]) {
            seed[current.type] = [];
        }
        seed[current.type].push(current);
    return seed;
    }, {});

};

const randomizeMultiple = (data) => {
    let multiple = data.multiple;

    const consolidateQuestions = (question) => {
        question.answers = question.incorrect_answers.concat(question.correct_answer);
        return question;
    };

    multiple.forEach(question => {
      question = consolidateQuestions(question);
    });

    let newDataSet = data;

    newDataSet.multiple = multiple;

    return newDataSet;
};

// const sortDataSets = (data) => {
//     let sets = [];

//     data.text.forEach(question => {
//         sets.push([question]);
//     });

//     const newBooleanSet = data.boolean.slice(2);

//     return {
//         results: sets
//     };
// };

// GET question endpoint
server.get("/api/questions", cors(), (req, res) => {
    // Randomize question order
    const randomizedData = shuffle(data.results);
    // Sort questions by type
    const sortedData = sortDataByType(randomizedData);
    // Consolidate all multiple choice questions into one array and randomize placement of correct answer
    const sortedDataModifiedMultiple = randomizeMultiple(sortedData);
    // Separate into 4 sets with 9 multiple choice questions, 2 boolean questions, 1 text question
    // const sortedDataBySet = sortDataSets(ssortedDataModifiedMultiple);
    res.json(sortedDataModifiedMultiple);
});

// starting server
server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});