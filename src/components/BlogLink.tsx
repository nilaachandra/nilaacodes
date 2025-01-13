import React from "react";
import { Link } from "next-view-transitions";

type BlogLinkProps = {
  slug: string;
  index: number;
  title: string;
  createdDate: string;
  description: string;
  views: number | null;
  emoji?: string;
};

const BlogLink: React.FC<BlogLinkProps> = ({
  slug,
  index,
  title,
  createdDate,
  description,
  views,
  emoji,
}) => {
  return (
    <Link
      href={`/writings/${slug}`}
      className="leading-none tracking-tight flex flex-col hover:bg-zinc-200 p-1 rounded-md transition-all duration-200"
    >
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-base leading-4 tracking-tight">
          {emoji} {title}
        </h1>
      </div>

      <p className="text-xs mt-1 text-zinc-600">{createdDate}</p>
    </Link>
  );
};

export default BlogLink;
