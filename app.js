const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const app = express();
const cors = require("cors");
const models = require("./models");
// const me = models.users[0];
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models
    // me
  }
});

server.applyMiddleware({ app });
app.use(cors());
app.listen(4000, () => {
  console.log("Server listening on 4000...");
});
