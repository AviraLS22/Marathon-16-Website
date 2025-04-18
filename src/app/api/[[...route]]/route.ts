import { Hono } from "hono";
import { handle } from "hono/vercel";
import registerRouter from "./signup";
import userRouter from "./userinfo";
import particiPantsRouter from "./participants";
import crossRouter from "./qrcode";
import { cors } from "hono/cors";




const app = new Hono().basePath("/api")
  .route("/user", userRouter)
  .route("/register", registerRouter)
  .route("/participants", particiPantsRouter)
  .route("/qrcode", crossRouter);

app.use('*', cors());

export const GET = handle(app);
export const POST = handle(app);


export type ApiType = typeof app;
