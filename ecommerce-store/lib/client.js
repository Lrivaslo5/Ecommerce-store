import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "mazgtnu3",
  dataset: "production",
  apiVersion: "2022-05-08",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // formatted this way for security reasons
});

const builder = ImageUrlBuilder(client);

//Sanity is giving us acces to the URLs of where our images are stored

export const urlFor = (source) => builder.image(source);
