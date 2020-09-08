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

const splitArray = (array, arrayLength) => {
    const newArray = [];

    let i = 0;

    while (i <= array.length) {
      newArray.push(array.slice(i, arrayLength + i));
      i += arrayLength;
    }

    return newArray;

};

const modifyData = (data) => {
    // Sort questions by type
    let newData = data.reduce((seed, current) => {
        if (!seed[current.type]) {
            seed[current.type] = [];
        }
        seed[current.type].push(current);
    return seed;
    }, {});

    // Consolidate all multiple choice questions into one array and randomize placement of correct answer

    const consolidateQuestions = (question) => {
        question.answers = shuffle(question.incorrect_answers.concat(question.correct_answer));
        return question;
    };

    newData.multiple.forEach(question => {
        question = consolidateQuestions(question);
      });

    // Separate into 4 sets with 9 multiple choice questions, 2 boolean questions, 1 text question

    let sets = [];

    newData.text.forEach(question => {
        sets.push([question]);
    });

    // Remove two boolean questions from the entire list to evenly split sets
    const newBooleanSet = splitArray(newData.boolean.slice(2), 2);

    const newMultipleSet = splitArray(newData.multiple, 9);

    sets = sets.map((value, index) => {
        return [value, newBooleanSet[index], newMultipleSet[index]];
    });

    const newDataSets = [];

    sets.forEach(set => {
        newDataSets.push(shuffle(set[0].concat(set[1]).concat(set[2])));
    });

    return newDataSets;
}

// GET question endpoint
server.get("/api/questions", cors(), (req, res) => {
    // Randomize question order before using modifyData()
    res.json(modifyData(shuffle(data.results)));
});

// starting server
server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});