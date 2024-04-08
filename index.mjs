import express, {json, query} from 'express'
import { graphqlHTTP } from "express-graphql";
import schema  from './Schema/index.mjs';

const app = express();
const PORT=process.env.PORT || 3000;


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})