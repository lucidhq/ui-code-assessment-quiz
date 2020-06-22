import { GraphQLObjectType } from 'graphql'
import { getRandomQuestions, getSummary } from '../module/questions/query'

export const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Query schema definition',
  fields: {
    getRandomQuestions,
    getSummary,
  },
})
