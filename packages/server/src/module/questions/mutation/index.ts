import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
} from 'graphql'
import { GraphQLAnswerTypeEnum } from '../query/types'
import { answerQuestionResolver, resetQuestionResolver } from './resolver'

export const answerQuestion = {
  type: new GraphQLObjectType({
    name: 'answeredResponse',
    fields: {
      response: { type: GraphQLBoolean },
    },
  }),
  description: 'Answer a question',
  args: {
    type: {
      name: 'type',
      type: new GraphQLNonNull(GraphQLAnswerTypeEnum),
    },
    correct: {
      name: 'correct',
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    answer: {
      name: 'answer',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (source: any, args: any, ctx: any) =>
    answerQuestionResolver(args, ctx),
}

export const resetQuestion = {
  type: new GraphQLObjectType({
    name: 'resetResponse',
    fields: {
      response: { type: GraphQLBoolean },
    },
  }),
  description: 'Reset answered db',
  resolve: () => resetQuestionResolver(),
}
