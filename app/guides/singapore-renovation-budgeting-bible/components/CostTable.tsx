interface CostTableProps {
  data: {
    headers: string[]
    rows: (string | number)[][]
    caption?: string
  }
}

export default function CostTable({ data }: CostTableProps) {
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
                  <td
                    key={cellIndex}
                    className={`whitespace-nowrap px-4 py-3 text-sm ${
                      cellIndex === 0 ? "font-medium text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {typeof cell === "number" ? `S$${cell.toLocaleString()}` : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.caption && (
        <div className="bg-gray-50 px-4 py-3 text-xs text-gray-500">{data.caption}</div>
      )}
    </div>
  )
}
