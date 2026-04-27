import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";
import BlogListContent from "@/components/sections/resources/BlogListContent";

export const metadata: Metadata = {
  title: "Blog | Formezy",
  description:
    "Stay updated with ideas, trends and practical knowledge across automation, workflows and modern business operations.",
};

export default function BlogListPage() {
  return <BlogListContent posts={blogPosts} />;
}
