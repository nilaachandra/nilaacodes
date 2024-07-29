import { format } from "date-fns";
import { enIN } from "date-fns/locale";
import { MotionHeader, childVariants, containerVariants } from "@/components/MotionDiv";
import BlogPostLink from "@/components/BlogLink";
import { fetchPages } from "@/lib/notion";

// Helper function to format the date
const formatDate = (date: string): string => {
  return format(new Date(date), "do MMMM yyyy", { locale: enIN });
};

// Server Component for fetching and rendering blog post links
const BlogLinks = async () => {
  const posts = await fetchPages();

  return (
    <MotionHeader
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full min-h-[60vh] flex flex-col"
    >
      <MotionHeader variants={childVariants} className="">
        <h1 className="font-bold text-2xl">My Writings</h1>
      </MotionHeader>
      {posts.map((post: any, index:number) => {
        const title = post.properties.Title.title?.[0].plain_text || "No Title";
        const slug = post.properties.Slug.rich_text?.[0].plain_text || "no-slug";
        const description = post.properties.Description.rich_text?.[0].plain_text || "No Description";
        const createdDate = post.properties.Created.created_time
          ? formatDate(post.properties.Created.created_time)
          : "Unknown Date";
        const views = post.properties.Views.number || 0;

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
};

export default BlogLinks;
