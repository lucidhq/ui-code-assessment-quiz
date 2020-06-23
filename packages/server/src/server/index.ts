import express from 'express'
import morgan from 'morgan'
import { ApolloServer } from 'apollo-server-express'
import { GraphQLError } from 'graphql'
import depthLimit from 'graphql-depth-limit'
import { schema } from '../graphql/schema'
import { getApolloConfig } from '../config'

export const init = (): express.Express => {
  const apolloServer: ApolloServer = new ApolloServer({
    schema,
    ...getApolloConfig(),
    validationRules: [depthLimit(5)],
    formatError: (err: GraphQLError) => {
      const { originalError, ...rest } = err
      return {
        ...rest,
        code: (originalError as any)?.code ?? 500,
      }
    },
  })
  const app = express()

  app.use(morgan('dev'))

  apolloServer.applyMiddleware({ app })

  process.on('beforeExit', () => {
    apolloServer.stop()
  })

  return app
}
