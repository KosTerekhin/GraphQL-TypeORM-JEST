import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga'

import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from './graphql.schema'
import { resolvers } from './resolvers'
import { typeormConnection } from '../typeormConnection'
// import * as path from 'path'
// import { processImport } from '@graphql-tools/import'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const startServer = async () => {
  const server = new GraphQLServer({ schema })
  await typeormConnection()
  await server.start(() => console.log(`${process.env.NODE_ENV}` + ' server is running on localhost:4000'))
}

startServer()


