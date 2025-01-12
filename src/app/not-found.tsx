'use client'

import Link from 'next/link'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8 text-muted-foreground">
        Sorry, the page you are looking for does not exist.
      </p>
      
      <Link 
        href="/"
        className="text-primary hover:underline"
      >
        Return Home
      </Link>
    </div>
  )
}