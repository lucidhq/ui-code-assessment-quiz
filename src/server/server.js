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

const sortDataSets = (data) => {
    let sets = [];

    data.text.forEach(question => {
        sets.push([question]);
    });

    const newBooleanSet = data.boolean.slice(2);

    let count = 0;

    for (let i = 0, j = data.multiple.length; i < j; i+= 9) {
      const newSet = data.multiple.slice(i, i + 9);
      
      sets[count].concat(newSet);

      count++;
      
    }

    count = 0;

    for (let i = 0, j = newBooleanSet.length; i < j; i+= 2) {
        const newSet = newBooleanSet.slice(i, i + 2);
        
        sets[count].concat(newSet);
  
        count++;

      }

    //   console.log('SETS', sets);

    return {
        results: sets
    };
};

// GET question endpoint
server.get("/api/questions", cors(), (req, res) => {
    // Randomize question order
    const randomizedData = shuffle(data.results);
    // Sort questions by type
    const sortedData = sortDataByType(randomizedData);
    // Separate into 4 sets with 9 multiple choice questions, 2 boolean questions, 1 text question
    const sortedDataBySet = sortDataSets(sortedData);
    res.json(sortedDataBySet);
});

// starting server
server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});