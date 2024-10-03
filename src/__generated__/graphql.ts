/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  droid?: Maybe<Droid>;
  hero?: Maybe<Character>;
  human?: Maybe<Human>;
};


export type QueryDroidArgs = {
  id: Scalars['String']['input'];
};


export type QueryHeroArgs = {
  episode?: InputMaybe<Episode>;
};


export type QueryHumanArgs = {
  id: Scalars['String']['input'];
};

export type Droid = Character & {
  __typename?: 'Droid';
  appearsIn?: Maybe<Array<Maybe<Episode>>>;
  friends?: Maybe<Array<Maybe<Character>>>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  primaryFunction?: Maybe<Scalars['String']['output']>;
};

export type Character = {
  appearsIn?: Maybe<Array<Maybe<Episode>>>;
  friends?: Maybe<Array<Maybe<Character>>>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Episode =
  | 'EMPIRE'
  | 'JEDI'
  | 'NEW_HOPE';

export type Human = Character & {
  __typename?: 'Human';
  appearsIn?: Maybe<Array<Maybe<Episode>>>;
  friends?: Maybe<Array<Maybe<Character>>>;
  homePlanet?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Character: ( Omit<Droid, 'friends'> & { friends?: Maybe<Array<Maybe<_RefType['Character']>>> } ) | ( Omit<Human, 'friends'> & { friends?: Maybe<Array<Maybe<_RefType['Character']>>> } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Droid: ResolverTypeWrapper<Omit<Droid, 'friends'> & { friends?: Maybe<Array<Maybe<ResolversTypes['Character']>>> }>;
  Character: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Character']>;
  Episode: Episode;
  Human: ResolverTypeWrapper<Omit<Human, 'friends'> & { friends?: Maybe<Array<Maybe<ResolversTypes['Character']>>> }>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  String: Scalars['String']['output'];
  Droid: Omit<Droid, 'friends'> & { friends?: Maybe<Array<Maybe<ResolversParentTypes['Character']>>> };
  Character: ResolversInterfaceTypes<ResolversParentTypes>['Character'];
  Human: Omit<Human, 'friends'> & { friends?: Maybe<Array<Maybe<ResolversParentTypes['Character']>>> };
  Boolean: Scalars['Boolean']['output'];
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  droid?: Resolver<Maybe<ResolversTypes['Droid']>, ParentType, ContextType, RequireFields<QueryDroidArgs, 'id'>>;
  hero?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, Partial<QueryHeroArgs>>;
  human?: Resolver<Maybe<ResolversTypes['Human']>, ParentType, ContextType, RequireFields<QueryHumanArgs, 'id'>>;
};

export type DroidResolvers<ContextType = any, ParentType extends ResolversParentTypes['Droid'] = ResolversParentTypes['Droid']> = {
  appearsIn?: Resolver<Maybe<Array<Maybe<ResolversTypes['Episode']>>>, ParentType, ContextType>;
  friends?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primaryFunction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = {
  __resolveType: TypeResolveFn<'Droid' | 'Human', ParentType, ContextType>;
  appearsIn?: Resolver<Maybe<Array<Maybe<ResolversTypes['Episode']>>>, ParentType, ContextType>;
  friends?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type HumanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Human'] = ResolversParentTypes['Human']> = {
  appearsIn?: Resolver<Maybe<Array<Maybe<ResolversTypes['Episode']>>>, ParentType, ContextType>;
  friends?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  homePlanet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Droid?: DroidResolvers<ContextType>;
  Character?: CharacterResolvers<ContextType>;
  Human?: HumanResolvers<ContextType>;
};

