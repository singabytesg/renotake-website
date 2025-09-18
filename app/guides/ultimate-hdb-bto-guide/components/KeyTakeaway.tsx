import { CheckCircle, AlertTriangle, Info, Lightbulb } from "lucide-react"

interface KeyTakeawayProps {
  title: string
  points: string[]
  variant?: "success" | "warning" | "info" | "tip"
}

export default function KeyTakeaway({ title, points, variant = "info" }: KeyTakeawayProps) {
  const variants = {
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: CheckCircle,
      iconColor: "text-green-600",
      titleColor: "text-green-900",
      textColor: "text-green-700",
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      icon: AlertTriangle,
      iconColor: "text-yellow-600",
      titleColor: "text-yellow-900",
      textColor: "text-yellow-700",
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: Info,
      iconColor: "text-blue-600",
      titleColor: "text-blue-900",
      textColor: "text-blue-700",
    },
    tip: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: Lightbulb,
      iconColor: "text-purple-600",
      titleColor: "text-purple-900",
      textColor: "text-purple-700",
    },
  }

  const style = variants[variant]
  const Icon = style.icon

  return (
    <div className={`rounded-lg border ${style.border} ${style.bg} p-6`}>
      <div className="flex items-start gap-3">
        <Icon className={`h-6 w-6 shrink-0 ${style.iconColor}`} />
        <div className="flex-1">
          <h3 className={`mb-3 text-lg font-semibold ${style.titleColor}`}>{title}</h3>
          <ul className="space-y-2">
            {points.map((point, index) => (
              <li key={index} className={`flex items-start gap-2 ${style.textColor}`}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
