import { NextRequest, NextResponse } from 'next/server';
import { notion } from '@/lib/notion'; // Update the import path as needed
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export async function POST(req: NextRequest) {
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

export async function GET(req: NextRequest) {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
