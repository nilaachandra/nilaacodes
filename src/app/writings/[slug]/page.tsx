import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import React from "react";

const Page = async ({ params }: { params: { slug: string } }) => {
  const post = await fetchBySlug(params.slug);
  if (!post) {
    return <p>Post Not found</p>;
  }

  const blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);


  return (
    <div dangerouslySetInnerHTML={{__html: html}} className="w-full prose leading-tight dark:text-white text-black">
      
    </div>
  );
};

export default Page;
