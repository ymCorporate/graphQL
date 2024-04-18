import { ApolloServer,gql } from "apollo-server";

export const typeDefs  = `#graphql
    type Game{
    id:ID!
    title:String!
    platform:[String!]!
    reviews:[Review!]    
    }
    type Review{
    id:ID!
    rating:Int!
    content:String!
    game:Game!
    author:Author!    
    }
    type Author{
    id:ID!
    name:String!
    verified:Boolean!
    reviews:[Review!]    
    }
    type Query{
        reviews: [Review]
        games: [Game]
        review(id:ID!):Review
        game(id:ID!):Game
        author(id:ID!):Author
        authors: [Author]
    }
`;