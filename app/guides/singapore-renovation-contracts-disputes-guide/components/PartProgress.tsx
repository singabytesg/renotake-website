interface PartProgressProps {
  currentIndex: number
  total: number
}

export default function PartProgress({ currentIndex, total }: PartProgressProps) {
  const progress = ((currentIndex + 1) / total) * 100

  return (
    <div className="h-1 w-full bg-gray-200">
      <div
        className="h-1 bg-red-600 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
