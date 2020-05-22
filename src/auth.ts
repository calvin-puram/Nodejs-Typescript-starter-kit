import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/api/v1/test", ({ response }: { response: any }) => {
  response.body = "hello world";
});

export default router;
