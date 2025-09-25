interface ProcessStepData {
  title: string
  description: string
  duration?: string
  documents?: string[]
  tip?: string
}

interface ProcessStepProps {
  step: ProcessStepData
  stepNumber: number
}

export default function ProcessStep({ step, stepNumber }: ProcessStepProps) {
  return (
    <div className="flex gap-4 rounded-lg border border-gray-200 bg-white p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
        {stepNumber}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <h3 className="font-semibold text-charcoal">{step.title}</h3>
          {step.duration && (
            <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">
              {step.duration}
            </span>
          )}
        </div>
        <p className="mt-2 text-gray-600">{step.description}</p>

        {step.documents && step.documents.length > 0 && (
          <div className="mt-3">
            <p className="text-sm font-medium text-gray-700">Required Documents:</p>
            <ul className="mt-1 space-y-1">
              {step.documents.map((doc, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        )}

        {step.tip && (
          <div className="mt-3 rounded bg-blue-50 p-3">
            <p className="text-sm text-blue-700">
              <span className="font-medium">Tip:</span> {step.tip}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
