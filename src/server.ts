import { ApolloServer } from "apollo-server";
import { ApolloServer as LambdaServer } from "apollo-server-lambda";
import { typeDefs } from "./schema/typedefs";
import { resolvers } from "./schema/resolver";

export const localServer = () => new ApolloServer({ typeDefs, resolvers, introspection: false });
export const lambdaServer = () => new LambdaServer({ typeDefs, resolvers, introspection: false });