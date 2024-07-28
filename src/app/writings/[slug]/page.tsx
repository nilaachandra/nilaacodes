import { fetchBySlug, fetchPageBlocks, notion, NotionPage } from './actions';
import { NotionRenderer } from '@notion-render/client';
import hljsPlugin from '@notion-render/hljs-plugin';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import BlogPageClient from './BlogPageClient';

// TypeScript type for the component props
type BlogPageProps = {
  params: {
    slug: string;
  };
};

// Server Component for fetching data and passing to Client Component
const BlogPage = async ({ params }: BlogPageProps) => {
  // Fetch the post by slug
  const post = await fetchBySlug(params.slug);

  // If the post is not found or not a valid NotionPage, return a "Post Not Found" message
  if (!post) {
    return <p>Post Not Found</p>;
  }

  // Fetch the blocks (content) of the page
  const blocks = await fetchPageBlocks(post.id);

  // Initialize the NotionRenderer with plugins for syntax highlighting and bookmark rendering
  const renderer = new NotionRenderer({
    client: notion,
  });
  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  // Render the blocks to HTML
  const html = await renderer.render(...blocks);

  return (
    <BlogPageClient post={post} html={html} blocks={blocks} />
  );
};

export default BlogPage;
