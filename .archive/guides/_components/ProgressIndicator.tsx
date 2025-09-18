interface ProgressIndicatorProps {
  progress: number
}

export default function ProgressIndicator({ progress }: ProgressIndicatorProps) {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-0.5 bg-gray-200">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>
  )
}
