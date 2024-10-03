import "@total-typescript/ts-reset";

import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { graphqlHTTP } from "express-graphql";
import { application } from "./gql-application";

const app = express();
const port = 4000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const execute = application.createExecution();
const schema = application.schema;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    customExecuteFn: execute,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`);
});
