const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const data = require("./data.json");

// create server
const server = express();
const port = 4000;

// set up GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// TODO: Remove test function
const root = { hello: () => "Hello world!" };

// Use graphqlhttp middleware
server.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
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
