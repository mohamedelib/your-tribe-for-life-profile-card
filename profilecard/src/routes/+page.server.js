import directus from "$lib/directus.js";
import { readItem } from "@directus/sdk";

export async function load() {
  const person = await directus.request(
    readItem("person", 246, {
      fields: ["*"],
    }),
  );
  return { person };
}
