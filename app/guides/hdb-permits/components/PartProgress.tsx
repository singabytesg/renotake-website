interface PartProgressProps {
  currentPart: number
  totalParts: number
}

export default function PartProgress({ currentPart, totalParts }: PartProgressProps) {
  const progressPercentage = (currentPart / totalParts) * 100

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-gray-700">
          Part {currentPart} of {totalParts}
        </span>
        <span className="text-gray-500">{Math.round(progressPercentage)}% Complete</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  )
}
