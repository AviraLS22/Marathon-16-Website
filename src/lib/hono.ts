import type { ApiType } from "@/app/api/[[...route]]/route";
import { hc } from "hono/client";



const BASE_URL =  "https://marathon-16-website.vercel.app/"
const client = hc<ApiType>(BASE_URL);


export const api = client.api;