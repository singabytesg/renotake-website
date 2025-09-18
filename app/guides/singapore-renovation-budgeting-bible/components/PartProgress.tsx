interface PartProgressProps {
  currentPart: number
  totalParts: number
}

export default function PartProgress({ currentPart, totalParts }: PartProgressProps) {
  const progressPercentage = (currentPart / totalParts) * 100

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>Progress</span>
        <span>
          Part {currentPart} of {totalParts}
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-green-500 transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  )
}
