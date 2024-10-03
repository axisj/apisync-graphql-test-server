import { createApplication } from "graphql-modules";
import { starWarsModule } from "./src/modules/star-wars";

export const application = createApplication({
  modules: [starWarsModule]
});
