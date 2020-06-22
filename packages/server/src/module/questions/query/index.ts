import { GraphQLList, GraphQLInt } from 'graphql'
import { GraphQLQuestions, GraphQLSummary } from './types'
import { getRandomQuestionsResolver, getSummaryResolver } from './resolver'

export const getRandomQuestions = {
  type: new GraphQLList(GraphQLQuestions),
  description: 'getRandomQuestions return an array of n questions',
  args: {
    n: {
      name: 'n',
      description: 'n is the amount of questions desired',
      type: GraphQLInt,
      default: 10,
    },
  },
  resolve: (source: any, args: any, ctx: any) => {
    return getRandomQuestionsResolver(args, ctx)
  },
}

export const getSummary = {
  type: GraphQLSummary,
  description:
    'getSummary returns an object {correctAnswers, incorrectAnswers, totalQuestionsAnswered, finalScore}',
  resolve: () => getSummaryResolver(),
}
