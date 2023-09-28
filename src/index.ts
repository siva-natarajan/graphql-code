import { localServer } from "./server";


localServer().listen().then((url) => {
  console.log(`listening on ${url.url}`);
});
