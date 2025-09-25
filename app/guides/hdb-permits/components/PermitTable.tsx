interface PermitTableData {
  headers: string[]
  rows: string[][]
  caption?: string
}

interface PermitTableProps {
  data: PermitTableData
}

function renderCell(cell: string, cellIndex: number) {
  // Check if this is a permit status cell with color coding
  if (cellIndex === 1 && cell.includes("|")) {
    const [text, color] = cell.split("|")
    const colorClasses = {
      red: "bg-red-100 text-red-700",
      yellow: "bg-yellow-100 text-yellow-700",
      green: "bg-green-100 text-green-700",
    }
    return (
      <span
        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${colorClasses[color as keyof typeof colorClasses]}`}
      >
        {text}
      </span>
    )
  }
  return cell
}

export default function PermitTable({ data }: PermitTableProps) {
  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {data.headers.map((header, index) => (
                <th key={index} className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 1 ? "bg-gray-50" : ""}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-3 text-sm text-gray-600">
                    {renderCell(cell, cellIndex)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.caption && (
        <div className="bg-gray-50 px-4 py-2">
          <p className="text-xs text-gray-500">{data.caption}</p>
        </div>
      )}
    </div>
  )
}
