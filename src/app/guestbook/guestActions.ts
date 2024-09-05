"use server"
import { db } from '@/lib/db';
import axios from 'axios';


interface Signtypes {
    name: string;
    email: string;
    message: string;
    signature: string;
}


export async function validateEmail(email: string): Promise<boolean> {
    // Step 1: Check if the email already exists in the database
    const existingEmail = await db.guestbookEntry.findFirst({
        where: { email: email },
    });

    if (existingEmail) {
        return true;
    }

    // Step 2: Proceed with external API validation if the email is not in the database

    //via abstract api
    // const apiKey = process.env.ABSTRACT_API_KEY;
    // const apiUrl = `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`;

    // try {
    //     const response = await axios.get(apiUrl);
    //     const emailData = response.data;

    //     // Combine the validation logic here
    //     const isValid = (
    //         emailData.deliverability === 'DELIVERABLE' &&
    //         emailData.quality_score >= 0.7 &&
    //         emailData.is_valid_format.value &&
    //         emailData.is_mx_found.value &&
    //         emailData.is_smtp_valid.value &&
    //         !emailData.is_disposable_email.value &&
    //         !emailData.is_catchall_email.value &&
    //         !emailData.is_role_email.value
    //     );


    //my api limit got exceeded so im using mailboxlayer
    const apiKey = process.env.MAILBOXLAYER_API_KEY;
    const apiUrl = `https://apilayer.net/api/check?access_key=${apiKey}&email=${email}`;

    try {
        const response = await axios.get(apiUrl);
        const emailData = response.data; 

        // email validation logic
        const isValid = (
            emailData.format_valid &&
            emailData.score >= 0.3
        );
        return isValid;
    } catch (error) {
        console.error('Error validating email:', error);
        return false;
    }
}

//
export const submitSignature = async (formData: Signtypes) => {
    //
    try {
        const response = await db.guestbookEntry.create({
            data: {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                signature: formData.signature
            }
        })
        return response
    } catch (error) {
        console.error('Error submitting signature:', error);
        throw new Error('Failed to submit signature');
    }
}

//fetch post
export async function fetchPosts() {
    try {
        const posts = await db.guestbookEntry.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return posts

    } catch (error) {
        console.error('Error fetching posts:', error);
        throw new Error('Failed to fetch posts');
    }
}