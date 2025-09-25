import { AlertTriangle, Info, DollarSign } from "lucide-react"

interface AlertData {
  type: "warning" | "info" | "cost"
  title: string
  content: string
}

interface CostAlertProps {
  alert: AlertData
}

export default function CostAlert({ alert }: CostAlertProps) {
  const styles = {
    warning: {
      container: "bg-red-50 border-red-200",
      icon: AlertTriangle,
      iconColor: "text-red-600",
      titleColor: "text-red-900",
      contentColor: "text-red-700",
    },
    info: {
      container: "bg-blue-50 border-blue-200",
      icon: Info,
      iconColor: "text-blue-600",
      titleColor: "text-blue-900",
      contentColor: "text-blue-700",
    },
    cost: {
      container: "bg-yellow-50 border-yellow-200",
      icon: DollarSign,
      iconColor: "text-yellow-600",
      titleColor: "text-yellow-900",
      contentColor: "text-yellow-700",
    },
  }

  const style = styles[alert.type]
  const Icon = style.icon

  return (
    <div className={`mt-6 rounded-lg border p-6 ${style.container}`}>
      <div className="flex items-start gap-3">
        <Icon className={`h-5 w-5 shrink-0 ${style.iconColor}`} />
        <div>
          <h3 className={`font-semibold ${style.titleColor}`}>{alert.title}</h3>
          <p className={`mt-1 text-sm ${style.contentColor}`}>{alert.content}</p>
        </div>
      </div>
    </div>
  )
}
