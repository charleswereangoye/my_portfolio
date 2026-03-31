import { MetadataRoute } from "next";
import { projectsData } from "../lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://charleswereangoye.dev";

  // 1. Generate URLs for all your dynamic project case study pages
  const projectUrls = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 2. Combine them with your static pages
  return [
    {
      url: baseUrl, // Your homepage
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1, 
    },
    {
      url: `${baseUrl}/projects`, // Your projects list
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/outro`, // Your outro page
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...projectUrls, // Automatically inserts all your project pages
  ];
}