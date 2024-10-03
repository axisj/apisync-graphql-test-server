import { StarWarsModule } from "./__generated__/module-types";
import { getDroid, getFriends, getHero, getHuman } from "./data";

export const resolvers: StarWarsModule.Resolvers = {
  Query: {
    droid: {
      resolve: async (_, { id }) => {
        return getDroid(id);
      }
    },
    human: {
      resolve: async (_, { id }) => {
        return getHuman(id);
      }
    },
    hero: {
      resolve: async (_, { episode }) => {
        return getHero(episode);
      }
    }
  },
  Human: {
    friends(human) {
      return getFriends(human);
    }
  },
  Droid: {
    friends(human) {
      return getFriends(human);
    }
  }
};
