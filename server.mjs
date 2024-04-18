import { ApolloServer } from "@apollo/server";
import  { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs}  from "./schema.mjs";
import db from "./db.mjs";

const resolvers= {
    Query: {
        games(){
            return db.games
        },
        reviews() {
            return db.reviews
        },
        authors() {
            return db.authors
        },
        review(_,args){
            return db.reviews.find((review)=>review.id===args.id);
        },
        game(_,args){
            return db.games.find((game)=>game.id===args.id);
        },
        author(_,args){
            return db.authors.find(author=>author.id===args.id);
        }
    },
    Game:{
        reviews(parent){
            return db.reviews.filter((r)=>r.game_id===parent.id);
        }
    },
    Author:{
        reviews(parent){
            return db.reviews.filter((r)=>r.author_id===parent.id);
        }
    },
    Review:{
        author(parent) {
            return db.authors.find((a)=>a.id===parent.author_id);
        },
        game(parent){
            return db.games.find((g)=>g.id===parent.game_id)
        }
    }

}
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server,(req, res) => {
    listen = { port:4000 };
})

console.log(`server listening on port ${url}`);