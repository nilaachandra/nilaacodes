'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function SearchParamsComponent() {
  const searchParams = useSearchParams()
  
  return (
    <div>
      {/* Use searchParams here */}
      <p>Current query: {searchParams.toString()}</p>
    </div>
  )
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8 text-muted-foreground">
        Sorry, the page you are looking for does not exist.
      </p>
      
      {/* Wrap the component using useSearchParams in Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsComponent />
      </Suspense>
    </div>
  )
}
