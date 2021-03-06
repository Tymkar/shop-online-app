import sanityCLient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityCLient({
  projectId: "k42oc3zm",
  dataset: "production",
  apiVersion: "2022-04-27",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
