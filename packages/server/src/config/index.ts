export interface ApolloConfig {
  playground: boolean
  graphqlPath: string
}

export const getApolloConfig = (): ApolloConfig => ({
  playground: process.env.APOLLO_PLAYGROUND === 'true',
  graphqlPath: '/graphql',
})
