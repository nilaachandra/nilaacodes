import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SignatureSkeleton = () => {
    return (
        <div>
            <ul className="grid grid-cols-2 gap-3 w-full mt-3">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <li key={index} className="flex col-span-2 lg:col-span-1 w-full">
                        <div className="rounded-lg w-full flex flex-col leading-none justify-between h-full bg-zinc-300 dark:bg-zinc-800 p-4">
                            <Skeleton className='h-3 w-64 mb-1' />
                            <Skeleton className='h-3 w-28' />
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col justify-end h-full text-xs">
                                    <Skeleton className='w-32 h-2' />
                                </div>
                                <Skeleton className='h-[75px] w-[150px]' />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SignatureSkeleton