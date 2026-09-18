import { createDirectus, rest, readItem } from "@directus/sdk";

const directus = createDirectus("https://fdnd.directus.app").with(rest());

export default directus;
