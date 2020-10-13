// import { User } from './entity/User'

const typeDefs = `
  type Query {
    hello(name: String): String!
  }

  type Mutation {
    register( email: String!, password: String!): Boolean
  }
`;

export default typeDefs