import { Client } from '@notionhq/client';
import { NextRequest, NextResponse } from 'next/server';
import React from "react";
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN!,
});

// Fetch live pages
export const fetchPages = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID!,
    filter: {
      property: "Status",
      status: {
        equals: "Live"
      }
    }
  });
});

// Fetch page by slug
export const fetchBySlug = React.cache((slug: string) => {
  return notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID!,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      }
    }
  })
  .then((res) => res.results[0] as PageObjectResponse | undefined);
});

// Fetch page blocks
export const fetchPageBlocks = React.cache((pageID: string) => {
  return notion.blocks.children.list({
    block_id: pageID
  })
  .then((res) => res.results as BlockObjectResponse[]);
});

// API Endpoint to increment views
export async function incrementViews(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  const { pageId } = await req.json();

  if (!pageId) {
    return NextResponse.json({ message: 'Bad Request' }, { status: 400 });
  }

  try {
    const page = await notion.pages.retrieve({ page_id: pageId }) as PageObjectResponse;

    // Ensure the page has the 'properties' field
    if (!('properties' in page)) {
      throw new Error('Page does not have properties');
    }

    const viewsProperty = page.properties.Views;

    // Ensure the 'Views' property is of type 'number'
    if (viewsProperty.type !== 'number') {
      throw new Error('Views property is not a number');
    }

    const currentViews = viewsProperty.number || 0;

    await notion.pages.update({
      page_id: pageId,
      properties: {
        Views: {
          number: currentViews + 1,
        },
      },
    });

    return NextResponse.json({ message: 'View count incremented' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
