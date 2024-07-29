"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "next-view-transitions";
import { IoIosArrowBack } from "react-icons/io";
import {
  childVariants,
  containerVariants,
  MotionHeader,
} from "@/components/MotionDiv";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionPage } from "@/lib/notion";

// TypeScript type for the component props
type BlogPageClientProps = {
  post: NotionPage;
  html: string;
  blocks: BlockObjectResponse[];
};

// Helper function to calculate reading time based on word count
const calculateReadingTime = (text: string): string => {
  const wordsPerMinute = 100; // Average reading speed
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

// Helper function to format date in "12th July 2024" format
const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const BlogPageClient = ({ post, html, blocks }: BlogPageClientProps) => {
  const textContent = blocks
    .map((block) => {
      if ("paragraph" in block && block.paragraph.rich_text) {
        return block.paragraph.rich_text.map((rt) => rt.plain_text).join(" ");
      }
      return "";
    })
    .join(" ");

  const readingTime = calculateReadingTime(textContent);

  // Extract post properties
  const title = post.properties.Title.title?.[0].plain_text || "Untitled";
  const description =
    post.properties.Description.rich_text?.[0].plain_text || "No description";
  const createdDate = formatDate(post.properties.Created.created_time!);
  const views = post.properties.Views.number;

  // Increment view count after 7 seconds
  useEffect(() => {
    const incrementViews = async () => {
      try {
        await axios.post("/api/incrementViews", { pageId: post.id });
      } catch (error) {
        console.error("Error incrementing views:", error);
      }
    };
    incrementViews();
  }, [post.id]);

  return (
    <MotionHeader
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full min-h-[60vh] flex flex-col leading-tight dark:text-white text-black"
    >
      <Link
        className="flex hover:underline items-center gap-1 mb-3"
        href={"/writings"}
      >
        <IoIosArrowBack size={20} />
        Back to all writings
      </Link>
      <header className="mb-3 leading-none ">
        <MotionHeader variants={childVariants} className="">
          <h1 className="text-2xl font-bold dark:text-white text-black">
            {title}
          </h1>
        </MotionHeader>

        <MotionHeader variants={childVariants} className="">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {createdDate} • {views === null ? 0 : views} views • {readingTime}
          </p>
        </MotionHeader>
      </header>
      <MotionHeader variants={childVariants} className="">
        <article
          className="prose leading-tight dark:text-white text-black mt-3"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <Link
          className="flex hover:underline items-center gap-1 my-3"
          href={"/writings"}
        >
          <IoIosArrowBack size={20} />
          Back to all writings
        </Link>
      </MotionHeader>
    </MotionHeader>
  );
};

export default BlogPageClient;
