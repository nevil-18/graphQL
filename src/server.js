var { graph, buildSchema, graphql } = require("graphql");

// Construct a schema uisng GraphQL schema language
var schema = buildSchema(`
 type Query {
     hello: String
 }
 `);

// The rootvalue provides a resolver function for each API endpoint
var rootValue = {
    hello: () => {
        return 'Hello World(graphQL)!';
    },
};

// Run the GraphQL query '{ hello }' and print out the response 
graphql({
    schema,
    source: '{ hello }',
    rootValue
}).then((response) => {
    console.log(response);
});