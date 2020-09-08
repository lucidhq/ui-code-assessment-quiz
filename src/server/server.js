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

    newData.multiple.forEach(question => {
        question.answers = shuffle(question.incorrect_answers.concat(question.correct_answer));
      });

      // TODO: boolean cutoff

    return newData;
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