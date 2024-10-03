/* eslint-disable */
import * as Types from "../../../__generated__/graphql";
import * as gm from "graphql-modules";
export namespace StarWarsModule {
  interface DefinedFields {
    Human: 'id' | 'name' | 'friends' | 'appearsIn' | 'homePlanet';
    Droid: 'id' | 'name' | 'friends' | 'appearsIn' | 'primaryFunction';
    Query: 'hero' | 'human' | 'droid';
    Character: 'id' | 'name' | 'friends' | 'appearsIn';
  };
  
  interface DefinedEnumValues {
    Episode: 'NEW_HOPE' | 'EMPIRE' | 'JEDI';
  };
  
  export type Episode = DefinedEnumValues['Episode'];
  export type Character = Pick<Types.Character, DefinedFields['Character']>;
  export type Human = Pick<Types.Human, DefinedFields['Human']>;
  export type Droid = Pick<Types.Droid, DefinedFields['Droid']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type HumanResolvers = Pick<Types.HumanResolvers, DefinedFields['Human'] | '__isTypeOf'>;
  export type DroidResolvers = Pick<Types.DroidResolvers, DefinedFields['Droid'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type CharacterResolvers = Pick<Types.CharacterResolvers, DefinedFields['Character']>;
  
  export interface Resolvers {
    Human?: HumanResolvers;
    Droid?: DroidResolvers;
    Query?: QueryResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Human?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      friends?: gm.Middleware[];
      appearsIn?: gm.Middleware[];
      homePlanet?: gm.Middleware[];
    };
    Droid?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      friends?: gm.Middleware[];
      appearsIn?: gm.Middleware[];
      primaryFunction?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      hero?: gm.Middleware[];
      human?: gm.Middleware[];
      droid?: gm.Middleware[];
    };
  };
}