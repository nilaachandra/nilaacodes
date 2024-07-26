import "server-only"
import { Client } from '@notionhq/client'
import React from "react"
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"


export const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_TOKEN!,
})

export const fetchPages = React.cache(() => { //using react cache because this websit will be hosted on vercel so to optimize it
    return notion.databases.query({
        database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID!,
        filter: {
            property: "Status",
            status: {
                equals: "Live"
            }
        }
    })
})

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
        .then((res) => res.results[0] as PageObjectResponse | undefined)
})

export const fetchPageBlocks = React.cache((pageID: string) => {
    return notion.blocks.children.list({
        block_id: pageID
    })
        .then((res) => res.results as BlockObjectResponse[])
})