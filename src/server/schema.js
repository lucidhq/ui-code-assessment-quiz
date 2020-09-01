const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");
const Axios = require("axios");

const QuestionType = new GraphQLObjectType({
  name: "Question",
  fields: () => ({
    question: { type: GraphQLString },
    type: { type: GraphQLString },
    correct_answer: { type: GraphQLString },
    incorrect_answers: { type: new GraphQLList(GraphQLString) },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    questions: {
      type: new GraphQLList(QuestionType),
      resolve(parent, args) {
        return Axios.get("http://localhost:4000/api/questions").then(
          (res) => res.data.results
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
