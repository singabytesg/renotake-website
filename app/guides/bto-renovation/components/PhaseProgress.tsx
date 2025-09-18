interface PhaseProgressProps {
  currentPhase: number
  totalPhases: number
}

export default function PhaseProgress({ currentPhase, totalPhases }: PhaseProgressProps) {
  const progressPercentage = (currentPhase / totalPhases) * 100

  return (
    <div className="relative bg-gray-100">
      <div className="h-2 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="absolute right-4 top-full mt-1 text-xs text-gray-500">
        Phase {currentPhase} of {totalPhases}
      </div>
    </div>
  )
}
