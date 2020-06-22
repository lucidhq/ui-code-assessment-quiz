import { GraphQLObjectType } from 'graphql'
import { answerQuestion, resetQuestion } from '../module/questions/mutation'

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutation schema definition',
  fields: {
    answerQuestion,
    resetQuestion,
  },
})
