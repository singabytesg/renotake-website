interface CostItem {
  item: string
  basic: string
  standard: string
  premium: string
  unit?: string
  notes?: string
}

interface CostTableProps {
  data: CostItem[]
  title?: string
}

export default function CostTable({ data, title }: CostTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      {title && (
        <div className="bg-gray-50 px-6 py-3">
          <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Item
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Basic
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Standard
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Premium
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{row.item}</div>
                    {row.unit && <div className="text-xs text-gray-500">{row.unit}</div>}
                    {row.notes && <div className="text-xs text-gray-500">{row.notes}</div>}
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">{row.basic}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {row.standard}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">{row.premium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
