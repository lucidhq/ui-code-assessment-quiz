import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'
import { Body } from './components'
import { App } from './views/App/App'

const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
})
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

const Root = () => (
  <ApolloProvider client={client}>
    <Body>
      <App />
    </Body>
  </ApolloProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
