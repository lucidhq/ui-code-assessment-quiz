const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const schema = require("./schema");

const data = require("./data.json");

// create server
const server = express();
const port = 4000;

// Use graphqlhttp middleware
server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// GET question endpoint
server.get("/api/questions", cors(), (req, res) => {
  res.json(data);
});

// starting server
server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
