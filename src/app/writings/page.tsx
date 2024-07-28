import { fetchPages } from "@/lib/notion";
import React from "react";
import { format } from "date-fns";
import { enIN } from "date-fns/locale";
import {
  childVariants,
  containerVariants,
  MotionHeader,
} from "@/components/MotionDiv";
import { Link } from "next-view-transitions";
import BlogPostLink from "../../components/BlogLink";


// Helper function to format the date
const formatDate = (date: string): string => {
  return format(new Date(date), "do MMMM yyyy", { locale: enIN });
};

const Writings = async () => {
  try {
    const posts = await fetchPages();
    console.log(posts.results[0]);
    return (
      <MotionHeader
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full min-h-[60vh] flex flex-col"
      >
        <MotionHeader variants={childVariants} className="">
          {" "}
          <h1 className="font-bold text-2xl">My Writings</h1>
        </MotionHeader>
        {posts.results.map((post: any, index) => {
          const title = post.properties.Title.title[0].plain_text;
          const slug = post.properties.Slug.rich_text[0].plain_text;
          const description =
            post.properties.Description.rich_text[0].plain_text;
          const createdDate = formatDate(post.properties.Created.created_time);
          const views = post.properties.Views.number;

          return (
            <MotionHeader key={index} variants={childVariants} className="">
              <BlogPostLink
                slug={slug}
                index={index}
                title={title}
                createdDate={createdDate}
                description={description}
                views={views}
              />
            </MotionHeader>
          );
        })}
      </MotionHeader>
    );
  } catch (error) {
    console.error("Error rendering Writings component:", error);
    return <div>Error loading posts.</div>;
  }
};

export default Writings;
