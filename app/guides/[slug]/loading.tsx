import { Skeleton } from "@/components/ui/skeleton"

export default function GuideLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Progress bar skeleton */}
      <div className="fixed left-0 right-0 top-0 z-50 h-0.5 bg-gray-200" />

      {/* Hero skeleton */}
      <div className="border-b border-gray-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Skeleton className="mb-4 h-8 w-32" />
          <Skeleton className="mb-4 h-12 w-3/4" />
          <div className="flex gap-4">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-28" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* TOC skeleton */}
          <aside className="hidden w-64 lg:block">
            <div className="sticky top-24">
              <Skeleton className="mb-4 h-6 w-32" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="ml-4 h-4 w-32" />
                <Skeleton className="ml-4 h-4 w-36" />
                <Skeleton className="h-4 w-44" />
                <Skeleton className="ml-4 h-4 w-28" />
                <Skeleton className="w-38 h-4" />
              </div>
            </div>
          </aside>

          {/* Main content skeleton */}
          <main className="min-w-0 flex-1">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-4">
                <Skeleton className="h-8 w-2/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </main>

          {/* Sidebar skeleton */}
          <aside className="hidden w-64 xl:block">
            <div className="sticky top-24 space-y-6">
              <div>
                <Skeleton className="mb-2 h-5 w-24" />
                <div className="space-y-2">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
              <div>
                <Skeleton className="mb-2 h-5 w-32" />
                <div className="space-y-2">
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
