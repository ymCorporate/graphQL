import graphql, {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} from "graphql";

const UserType = new GraphQLObjectType({
    name:'User',
    fields:()=>({
        id:{type:GraphQLInt},
        first_name :{type:GraphQLString},
        last_name:{type:GraphQLString},
        email:{type:GraphQLString},
        password:{type:GraphQLString},
    })
})

export default UserType