import {gql} from 'apollo-server'


const typeDefs = gql`
scalar Date


type Listing {
    description: String!
    id: String!
    title: ID!
}

type User {
    email: String!,
    id: ID!
}

type UserSession {
    createdAt: Date!
    expiresAt: Date!
    id: ID!
    user: User!
}

type Mutation {
    createUser(email: String!, password: String!): User!
    createUserSession(email: String!, password: String!): UserSession!
}

type Query {
    listings: [Listing!]!
    userSession(me: Boolean!): UserSession
}

`


export default  typeDefs