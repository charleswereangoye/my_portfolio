import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // If you ever build a private admin dashboard, you would 'disallow' it here
    },
    sitemap: "https://charleswereangoye.dev/sitemap.xml",
  };
}