import React from 'react';
import { Client } from "@notionhq/client";
import { PageObjectResponse, BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// Initialize the Notion client with the auth token
export const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN!,
});

// TypeScript types for page properties
interface NotionText {
  plain_text: string;
}

interface NotionProperty {
  id: string;
  type: string;
  title?: NotionText[];
  rich_text?: NotionText[];
  number?: number;
  created_time?: string;
}

export interface NotionPage {
  id: string;
  properties: {
    Title: NotionProperty;
    Slug: NotionProperty;
    Description: NotionProperty;
    Created: NotionProperty;
    Views: NotionProperty;
  };
}

// Type guard to check if an object is a NotionPage
const isNotionPage = (page: any): page is NotionPage => {
  return (
    page &&
    page.properties &&
    page.properties.Title?.title &&
    page.properties.Slug?.rich_text &&
    page.properties.Description?.rich_text &&
    page.properties.Created?.created_time &&
    page.properties.Views?.number
  );
};

// Fetch pages
export const fetchPages = React.cache(async (): Promise<NotionPage[]> => {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID!,
    filter: {
      property: "Status",
      status: {
        equals: "Live",
      },
    },
  });

  // Filter and map results to ensure they match NotionPage interface
  return response.results.filter(isNotionPage) as any
});

// Fetch page by slug
export const fetchBySlug = async (slug: string): Promise<NotionPage | undefined> => {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID!,
    filter: {
      property: 'Slug',
      rich_text: {
        equals: slug,
      },
    },
  });

  // Narrow the type before casting
  const page = response.results[0];
  if (isNotionPage(page)) {
    return page;
  }
  return undefined;
};

// Fetch page blocks
export const fetchPageBlocks = async (pageID: string): Promise<BlockObjectResponse[]> => {
  const response = await notion.blocks.children.list({
    block_id: pageID,
  });
  return response.results as BlockObjectResponse[];
};
