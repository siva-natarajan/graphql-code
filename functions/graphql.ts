import { Handler } from '@netlify/functions'
import { lambdaServer } from "../src/server";

const server = lambdaServer();

const handler = server.createHandler({
    expressGetMiddlewareOptions: {
        cors: {
            origin: '*'
        }
    }
});

export { handler }