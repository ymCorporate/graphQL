import UserType from "./Types/UserType.mjs";
import mockData from '../MOCK_DATA.json' assert {type:"json"};
import graphql, {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from "graphql";


const rootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        getAllUsers:{
            type:new GraphQLList(UserType),
            args : {id: { type : GraphQLInt }},
            resolve(parent,args){
                return mockData
            }
        }
    }
})
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        CreateUser:{
            type: UserType,
            args: {
                firstname: {type : GraphQLString},
                lastname: {type : GraphQLString},
                email: {type : GraphQLString},
                password: {type : GraphQLString},
            }
            ,resolve(parent,args){
                mockData.push({id: mockData.length+1,firstname:args.firstname,lastname:args.lastname,email:args.email,password:args.password})
                return args
            }
        }
    }
})

export default new GraphQLSchema({query: rootQuery, mutation: Mutation,});