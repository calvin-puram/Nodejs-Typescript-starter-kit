import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const port = 5000;
const app = new Application();

const router = new Router();
app.use(router.routes());
app.use(router.allowedMethods());

router.get("/api/v1/test", ({ response }: { response: any }) => {
  response.body = "hello world";
});

console.log(`server listening on port ${port}`);
await app.listen({ port });
