import { createModule, gql } from "graphql-modules";
import fs from "node:fs";
import { resolvers } from "./resolvers";
import path from "path";

export const starWarsModule = createModule({
  id: "star-wars",
  dirname: __dirname,
  typeDefs: gql(fs.readFileSync(path.resolve(__dirname, "./typedefs/schema.graphql"), "utf-8")),
  resolvers
});
