"use client";
import Image from "next/image";
import { format } from "date-fns";
import { useSignatures } from "./useSignatures";
import { capitalize } from "@/lib/capitalize";
import SignatureSkeleton from "./SignatureSkeleton";

export type Post = {
    id: string;
    message: string;
    email: string;
    createdAt: Date; // Assuming createdAt is now a Date object
    signature: string;
    name: string;
};

export const SignatureCard = () => {
    const { data: posts, isLoading, isFetching } = useSignatures();

    if (isLoading || isFetching) {
        return <SignatureSkeleton/>
    }

    if (!posts || posts.length === 0) {
        return <p>No signatures available.</p>;
    }

    return (
        <ul className="grid grid-cols-2 gap-3 w-full mt-3">
            {posts.map((post) => (
                <li key={post.id} className="flex col-span-2 lg:col-span-1 w-full">
                    <div className="rounded-lg w-full flex flex-col leading-none justify-between h-full bg-zinc-300 dark:bg-zinc-800 p-4">
                        <p className="leading-none">{post.message}</p>
                        <p className="leading-none font-semibold">By {post.name || "Unknown"}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col justify-end h-full text-xs">
                                <p>
                                    {format(new Date(post.createdAt), "MMMM d, yyyy, h:mm a")}
                                </p>
                            </div>
                            {post.signature && (
                                <div className="dark:invert">
                                    <Image alt="signature" src={post.signature} width={150} height={150} />
                                </div>
                            )}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};
