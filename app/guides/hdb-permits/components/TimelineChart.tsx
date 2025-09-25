interface TimelineData {
  stages: {
    name: string
    duration: string
    description: string
    status?: "completed" | "current" | "pending"
  }[]
}

interface TimelineChartProps {
  data: TimelineData
}

export default function TimelineChart({ data }: TimelineChartProps) {
  return (
    <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="mb-4 font-semibold text-charcoal">Application Timeline</h3>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-8 h-[calc(100%-2rem)] w-0.5 bg-gray-300" />

        {/* Timeline stages */}
        <div className="space-y-6">
          {data.stages.map((stage, index) => (
            <div key={index} className="relative flex items-start gap-4">
              {/* Circle indicator */}
              <div
                className={`z-10 h-8 w-8 shrink-0 rounded-full border-2 ${
                  stage.status === "completed"
                    ? "border-green-500 bg-green-500"
                    : stage.status === "current"
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300 bg-white"
                } flex items-center justify-center`}
              >
                {stage.status === "completed" && (
                  <span className="text-xs font-bold text-white">✓</span>
                )}
                {stage.status === "current" && (
                  <span className="h-3 w-3 animate-pulse rounded-full bg-white" />
                )}
                {stage.status === "pending" && (
                  <span className="text-xs font-bold text-gray-400">{index + 1}</span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <div className="flex items-center gap-3">
                  <h4 className="font-medium text-charcoal">{stage.name}</h4>
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">
                    {stage.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
