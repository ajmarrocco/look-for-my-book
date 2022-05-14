// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors:[], description: String!, title: String!, bookId: ID!, image: String!, link:! String): User
    }
`;

// export the typeDefs
module.exports = typeDefs;