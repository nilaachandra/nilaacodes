import { fetchPages } from "@/lib/notion";
import { Link } from "next-view-transitions";
import React from "react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { enIN } from "date-fns/locale/en-IN";

// Helper function to format the date
const formatDate = (date: string): string => {
  return format(new Date(date), "do MMMM yyyy", { locale: enIN });
};

const Writings = async () => {
  try {
    const posts = await fetchPages();
    console.log(posts.results[0])
    return (
      <div className="w-full min-h-[60vh] flex flex-col gap-2">
        {posts.results.map((post: any, index) => {
          const title = post.properties.Title.title[0].plain_text;
          const slug = post.properties.Slug.rich_text[0].plain_text;
          const description = post.properties.Description.rich_text[0].plain_text;

          const createdDate = formatDate(post.properties.Created.created_time);
          const views = post.properties.Views.number;

          return (
            <Link
              href={`/writings/${slug}`}
              className="leading-none tracking-tight"
              key={index}
            >
              <div className="flex justify-between items-center">
                <h1 className="font-semibold hover:underline transition-all duration-200 lg:text-lg text-base">
                  {index + 1}. {title}
                </h1>
                <p className="text-sm text-zinc-600">{createdDate}</p>
              </div>
              <p className="text-zinc-600">{description}</p>
              <p className="text-zinc-600 text-sm">{views === null ? 0 : views} views</p>
            </Link>
          );
        })}
      </div>
    );
  } catch (error) {
    console.error("Error rendering Writings component:", error);
    return <div>Error loading posts.</div>;
  }
};

export default Writings;
