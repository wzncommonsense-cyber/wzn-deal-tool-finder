import type { MetadataRoute } from "next";
import { blogPosts } from "../../data/blog-posts";
import { categories } from "../../data/categories";
import { tools } from "../../data/tools";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/categorieen",
    "/deals",
    "/blog",
    "/over",
    "/contact",
    "/affiliate-disclaimer",
    "/privacy",
    "/voorwaarden",
  ];

  const categoryRoutes = categories.map((category) => `/categorieen/${category.slug}`);
  const toolRoutes = tools.map((tool) => `/tools/${tool.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...categoryRoutes, ...toolRoutes, ...blogRoutes].map(
    (route) => ({
      url: absoluteUrl(route),
      lastModified: new Date(),
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : 0.7,
    }),
  );
}
