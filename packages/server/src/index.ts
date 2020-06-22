import chalk from 'chalk'
import { init } from './server'

require('dotenv').config()

const log = console.log

log(chalk.green('--- Gateway Service ---'))

init().listen({ port: process.env.PORT }, () =>
  log(
    chalk.blue(
      `🚀 Server ready at http://localhost:${process.env.PORT}/graphql`,
    ),
  ),
)

log(chalk.green('--- Gateway started succesfully  ---'))
