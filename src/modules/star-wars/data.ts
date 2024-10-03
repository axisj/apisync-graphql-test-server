/**
 * This defines a basic set of data for our Star Wars Schema.
 *
 * This data is hard coded for the sake of the demo, but you could imagine
 * fetching this data from a backend service rather than from hardcoded
 * JSON objects in a more complex demo.
 */
import { Character, Droid, Human, InputMaybe } from "../../__generated__/graphql";
import { Episode as EpisodeString } from "../../__generated__/graphql";
import { Episode } from "../../../__generated__/graphql";

const luke: Human = {
  __typename: "Human",
  id: "1000",
  name: "Luke Skywalker",
  friends: [
    {
      id: "1002"
    },
    {
      id: "1003"
    },
    {
      id: "2000"
    },
    {
      id: "2001"
    }
  ],
  appearsIn: [Episode.Empire, Episode.Jedi, Episode.NewHope],
  homePlanet: "Tatooine"
};

const vader: Human = {
  __typename: "Human",
  id: "1001",
  name: "Darth Vader",
  friends: [
    {
      id: "1004"
    }
  ],
  appearsIn: [Episode.Empire, Episode.Jedi, Episode.NewHope],
  homePlanet: "Tatooine"
};

const han: Human = {
  __typename: "Human",
  id: "1002",
  name: "Han Solo",
  friends: [
    {
      id: "1000"
    },
    {
      id: "1003"
    },
    {
      id: "2001"
    }
  ],
  appearsIn: [Episode.Empire, Episode.Jedi, Episode.NewHope]
};

const leia: Human = {
  __typename: "Human",
  id: "1003",
  name: "Leia Organa",
  friends: [
    {
      id: "1000"
    },
    {
      id: "1002"
    },
    {
      id: "2000"
    },
    {
      id: "2001"
    }
  ],
  appearsIn: [Episode.Empire, Episode.Jedi, Episode.NewHope],
  homePlanet: "Alderaan"
};

const tarkin: Human = {
  __typename: "Human",
  id: "1004",
  name: "Wilhuff Tarkin",
  friends: [
    {
      id: "1001"
    }
  ],
  appearsIn: [Episode.NewHope]
};

const humanData: { [id: string]: Human } = {
  [luke.id]: luke,
  [vader.id]: vader,
  [han.id]: han,
  [leia.id]: leia,
  [tarkin.id]: tarkin
};

const threepio: Droid = {
  __typename: "Droid",
  id: "2000",
  name: "C-3PO",
  friends: [
    {
      id: "1000"
    },
    {
      id: "1002"
    },
    {
      id: "1003"
    },
    {
      id: "2001"
    }
  ],
  appearsIn: [Episode.Empire, Episode.Jedi, Episode.NewHope],
  primaryFunction: "Protocol"
};

const artoo: Droid = {
  __typename: "Droid",
  id: "2001",
  name: "R2-D2",
  friends: [
    {
      id: "1000"
    },
    {
      id: "1002"
    },
    {
      id: "1003"
    }
  ],
  appearsIn: [Episode.Empire, Episode.Jedi, Episode.NewHope],
  primaryFunction: "Astromech"
};

const droidData: { [id: string]: Droid } = {
  [threepio.id]: threepio,
  [artoo.id]: artoo
};

/**
 * Helper function to get a character by ID.
 */
function getCharacter(id: string): Promise<Character | null> {
  // Returning a promise just to illustrate that GraphQL.js supports it.
  return Promise.resolve(humanData[id] ?? droidData[id]);
}

/**
 * Allows us to query for a character's friends.
 */
export function getFriends(character: Character): Array<Promise<Character>> {
  if (!character.friends) return [];
  return character.friends
    .map((friend) => friend != null && getCharacter(friend.id))
    .filter(Boolean);
}

/**
 * Allows us to fetch the undisputed hero of the Star Wars trilogy, R2-D2.
 */
export function getHero(episode?: InputMaybe<EpisodeString>): Character {
  if (episode === Episode.Jedi) {
    // Luke is the hero of Episode V.
    return luke;
  }
  // Artoo is the hero otherwise.
  return artoo;
}

/**
 * Allows us to query for the human with the given id.
 */
export function getHuman(id: string): Human | null {
  return humanData[id];
}

/**
 * Allows us to query for the droid with the given id.
 */
export function getDroid(id: string): Droid | null {
  return droidData[id];
}
