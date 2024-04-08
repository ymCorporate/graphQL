import graphql, {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString} from "graphql";

const UserType = new GraphQLObjectType({
    name:'User',
    fields:()=>({
        id:{type:GraphQLInt},
        firstname :{type:GraphQLString},
        lastname:{type:GraphQLString},
        email:{type:GraphQLString},
        password:{type:GraphQLString},
    })
})

export default UserType