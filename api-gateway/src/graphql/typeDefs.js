import {gql} from 'apollo-server'


const typeDefs = gql`
type Listing {
    description: String!
    id: String!
    title: ID!
}

type User {
    email: String!,
    id: ID!
}

type Mutation {
    createUser(email: String!, password: String!): User!
}

type Query {
    listings: [Listing!]!
}

`


export default  typeDefs