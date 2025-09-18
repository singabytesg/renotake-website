interface QuickFactProps {
  label: string
  value: string
  description?: string
  icon?: string
}

export default function QuickFact({ label, value, description, icon }: QuickFactProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md">
      <div className="flex items-start gap-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <div className="flex-1">
          <div className="text-xs font-medium uppercase tracking-wider text-gray-500">{label}</div>
          <div className="mt-1 text-2xl font-bold text-primary">{value}</div>
          {description && <div className="mt-1 text-sm text-gray-600">{description}</div>}
        </div>
      </div>
    </div>
  )
}
