import UserType from "./Types/UserType.mjs";
import mockData from '../MOCK_DATA.json' assert {type: 'json'};
import {
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
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
        },
        getUserById:{
            type:UserType,
            args : {id:{ type : GraphQLInt }},
            resolve(parent,args){
                const UserId = args.id;
                return mockData.find(user => user.id === UserId)
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
                first_name: {type : GraphQLString},
                last_name: {type : GraphQLString},
                email: {type : GraphQLString},
                password: {type : GraphQLString},
            },
            resolve(parent,args){
                mockData.push({id: mockData.length+1,first_name:args.first_name,last_name:args.last_name,email:args.email,password:args.password})
                return args
            }
        },
        DeleteUser:{
            type: UserType,
            args: {
                id:{ type : GraphQLInt }
            },
            resolve(parent,args){
                const UserId=args.id;
                const index = mockData.find(user => user.id === UserId);
                const Iid = index.id
                if(Iid !== -1){
                    const deletedUser = mockData.splice(Iid-1, 1)[0];
                    return deletedUser;
                }
                return null;
            }
        },
        UpdateUser:{
            type: UserType,
            args: {
                id: { type : GraphQLInt },
                first_name:{ type : GraphQLString },
                email: { type:GraphQLString }
            },
            resolve(parent,args){
                const UserId=args.id;
                const index = mockData.find(user =>user.id === UserId);
                const Iid = index.id-1
                if(Iid !== -1){
                    if(args.first_name){
                        mockData[Iid].first_name=args.first_name;
                    }
                    if(args.email){
                        mockData[Iid].email=args.email;
                    }
                }
                return mockData[Iid]
            }
        },
    }
})

export default new GraphQLSchema({query: rootQuery, mutation: Mutation,});