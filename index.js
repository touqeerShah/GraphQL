import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema";
import { resolvers } from "./data/resolver";

const app = express();
app.get("/", (req, res) => {
  res.send("GraphQL");
});

const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(8080, () => {
  console.log("Server is Runing on localhost:8080/graphql ");
});
