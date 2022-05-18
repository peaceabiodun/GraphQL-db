// scaler types: Strings, Int, Boolean, ID and Float. putting "!" after the scaler meakes it none nullable.
const { ApolloServer, gql} = require ("apollo-server"); 
const { db } = require("./db");
const { Category } = require("./resolvers/Category");
const { Mutation } = require("./resolvers/Mutation");
const { Product } = require("./resolvers/Products");
const { Query } = require("./resolvers/Query");
const { typeDefs } = require("./Schema");


const server = new ApolloServer ({
    typeDefs,
    resolvers: {
        Query,
        Mutation, 
        Category,
        Product,
    },
    context: {
        db,
    },
});

server.listen().then(({url}) =>{
         console.log("server is ready at" + url)
     });