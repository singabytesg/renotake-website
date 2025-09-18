"use client"

import { useState } from "react"
import { CreditCard, Building, Percent, Calendar } from "lucide-react"

interface LoanOption {
  provider: string
  type: string
  interestRate: number
  maxAmount: number
  tenure: number
  monthlyPayment?: number
}

interface FinancingComparisonProps {
  data: LoanOption[]
}

export default function FinancingComparison({ data: initialData }: FinancingComparisonProps) {
  const [loanAmount, setLoanAmount] = useState(50000)
  const [tenure, setTenure] = useState(5)

  const calculateMonthlyPayment = (principal: number, rate: number, years: number) => {
    const monthlyRate = rate / 100 / 12
    const months = years * 12
    const payment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    return Math.round(payment)
  }

  const loanOptions = initialData.map((option) => ({
    ...option,
    monthlyPayment: calculateMonthlyPayment(
      loanAmount,
      option.interestRate,
      Math.min(tenure, option.tenure)
    ),
  }))

  const bestOption = loanOptions.reduce((best, current) =>
    current.monthlyPayment! < best.monthlyPayment! ? current : best
  )

  return (
    <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-charcoal">
        <CreditCard className="h-5 w-5 text-primary" />
        Financing Comparison Tool
      </h3>

      {/* Input Controls */}
      <div className="mb-6 grid gap-4 rounded-lg bg-gray-50 p-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Loan Amount</label>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">S$</span>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseInt(e.target.value) || 0)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2"
              step="5000"
            />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Loan Tenure</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(parseInt(e.target.value) || 1)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2"
              min="1"
              max="7"
            />
            <span className="text-gray-500">years</span>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Provider</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                Interest Rate
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                Monthly Payment
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                Total Interest
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {loanOptions.map((option, index) => {
              const actualTenure = Math.min(tenure, option.tenure)
              const totalPayment = option.monthlyPayment! * actualTenure * 12
              const totalInterest = totalPayment - loanAmount
              const isBest = option === bestOption

              return (
                <tr key={index} className={isBest ? "bg-green-50" : ""}>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {option.type === "Bank" ? (
                        <Building className="h-4 w-4 text-gray-400" />
                      ) : (
                        <CreditCard className="h-4 w-4 text-gray-400" />
                      )}
                      <div>
                        <div className="font-medium text-gray-900">{option.provider}</div>
                        <div className="text-xs text-gray-500">{option.type} Loan</div>
                      </div>
                      {isBest && (
                        <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                          Best
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <Percent className="h-3 w-3 text-gray-400" />
                      <span className="font-medium">{option.interestRate}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-gray-900">
                      S${option.monthlyPayment?.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className={`font-medium ${isBest ? "text-green-600" : "text-gray-600"}`}>
                      S${totalInterest.toLocaleString()}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-6 rounded-lg bg-blue-50 p-4">
        <div className="flex items-start gap-3">
          <Calendar className="mt-0.5 h-5 w-5 text-blue-600" />
          <div>
            <h4 className="font-semibold text-blue-900">Recommendation</h4>
            <p className="mt-1 text-sm text-blue-800">
              Based on your inputs, <strong>{bestOption.provider}</strong> offers the lowest monthly
              payment at <strong>S${bestOption.monthlyPayment?.toLocaleString()}</strong> per month,
              saving you{" "}
              <strong>
                S$
                {(
                  (Math.max(...loanOptions.map((o) => o.monthlyPayment!)) -
                    bestOption.monthlyPayment!) *
                  tenure *
                  12
                ).toLocaleString()}
              </strong>{" "}
              over {tenure} years compared to the most expensive option.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
