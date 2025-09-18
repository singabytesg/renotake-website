import { User } from "lucide-react"

interface AuthorBioProps {
  author: string
}

export default function AuthorBio({ author }: AuthorBioProps) {
  // In the future, this could fetch author data from a database
  // For now, we'll use a simple display

  const authorData = {
    "RenoTake Team": {
      bio: "The RenoTake editorial team brings together renovation experts, interior designers, and experienced homeowners to provide practical, actionable advice for your Singapore renovation journey.",
      avatar: null,
    },
  }

  const currentAuthor = authorData[author as keyof typeof authorData] || {
    bio: `${author} is a contributor to RenoTake, sharing insights and expertise on Singapore home renovation.`,
    avatar: null,
  }

  return (
    <div className="rounded-lg bg-gray-50 p-6">
      <h3 className="mb-3 text-sm font-semibold text-gray-700">About the Author</h3>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          {currentAuthor.avatar ? (
            <img src={currentAuthor.avatar} alt={author} className="h-12 w-12 rounded-full" />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <User className="h-6 w-6 text-green-600" />
            </div>
          )}
        </div>
        <div>
          <h4 className="mb-1 font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-600">{currentAuthor.bio}</p>
        </div>
      </div>
    </div>
  )
}
