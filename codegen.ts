import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/modules/**/typedefs/*.graphql",
  generates: {
    "./src/modules/": {
      preset: "graphql-modules",
      presetConfig: {
        baseTypesPath: "../__generated__/graphql.ts",
        filename: "__generated__/module-types.ts"
      },
      plugins: [
        {
          add: {
            content: "/* eslint-disable */"
          }
        },
        "typescript",
        "typescript-resolvers"
      ]
    }
  }
};

export default config;
