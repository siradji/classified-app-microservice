import {gql} from 'apollo-server'


const typeDefs = gql`
type Listing {
    description: String!
    id: String!
    title: ID!
}

type Query {
    listings: [Listing!]!
}

`


export default  typeDefs