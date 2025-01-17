import { useState } from 'react'

const monthlyData = [
  { month: 'Jan', value: 420 },
  { month: 'Feb', value: 450 },
  { month: 'Mar', value: 380 },
  { month: 'Apr', value: 520 },
  { month: 'May', value: 480 },
  { month: 'Jun', value: 400 },
  { month: 'Jul', value: 380 },
  { month: 'Aug', value: 360 },
  { month: 'Sep', value: 410 },
  { month: 'Oct', value: 390 },
  { month: 'Nov', value: 380 },
  { month: 'Dec', value: 450 }
]

export default function PriceDynamics() {
  const [selectedMetal, setSelectedMetal] = useState('Gold')
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M')

  // Calculate chart dimensions
  const chartWidth = 800
  const chartHeight = 300
  const padding = 40

  // Calculate scales
  const maxValue = Math.max(...monthlyData.map(d => d.value))
  const minValue = Math.min(...monthlyData.map(d => d.value))
  
  // Create path for the line
  const points = monthlyData.map((d, i) => {
    const x = (i * (chartWidth - 2 * padding)) / (monthlyData.length - 1) + padding
    const y = chartHeight - padding - ((d.value - minValue) * (chartHeight - 2 * padding)) / (maxValue - minValue)
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
  }).join(' ')

  return (
    <div className='bg-black p-10  mx-5 rounded-xl my-10 md:container md:m-auto md:mb-16'>
        <h2 className='text-white'>Price Dynamics</h2>
    <div className="bg-white rounded-lg p-6 container mx-auto my-3">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <button
            className={`px-4 py-1 rounded-full text-sm ${
              selectedMetal === 'Gold'
                ? 'bg-primary text-white'
                : 'text-gray-500'
            }`}
            onClick={() => setSelectedMetal('Gold')}
          >
            Gold
          </button>
          <button
            className={`px-4 py-1 rounded-full text-sm ${
              selectedMetal === 'Silver'
                ? 'bg-primary text-white'
                : 'text-gray-500'
            }`}
            onClick={() => setSelectedMetal('Silver')}
          >
            Silver
          </button>
        </div>

        <div className="md:flex items-center gap-2">
          <span className="md:text-2xl font-bold text-gray-900 text-sm">€ 298.92</span>
          <span className="text-sm text-red-500">-0.8%</span>
        </div>

        <div className="md:flex gap-2 text-sm">
          {['1D', '1M', '1Y'].map((timeframe) => (
            <button
              key={timeframe}
              className={`px-3 py-1 text-sm rounded ${
                selectedTimeframe === timeframe
                  ? 'bg-black text-white'
                  : 'text-gray-500'
              }`}
              onClick={() => setSelectedTimeframe(timeframe)}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>

      <div className="relative" style={{ height: `${chartHeight}px` }}>
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          preserveAspectRatio="none"
        >
          {/* Y-axis grid lines */}
          {[0, 1, 2, 3, 4].map((tick) => {
            const y = padding + (tick * (chartHeight - 2 * padding)) / 4
            return (
              <g key={tick}>
                <line
                  x1={padding}
                  y1={y}
                  x2={chartWidth - padding}
                  y2={y}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
                <text
                  x={padding - 10}
                  y={y}
                  textAnchor="end"
                  alignmentBaseline="middle"
                  className="text-xs fill-gray-500"
                >
                  {Math.round(maxValue - (tick * (maxValue - minValue)) / 4)}
                </text>
              </g>
            )
          })}

          {/* X-axis labels */}
          {monthlyData.map((d, i) => {
            const x = (i * (chartWidth - 2 * padding)) / (monthlyData.length - 1) + padding
            return (
              <text
                key={i}
                x={x}
                y={chartHeight - 10}
                textAnchor="middle"
                className="text-xs fill-gray-500"
              >
                {d.month}
              </text>
            )
          })}

          {/* Line chart */}
          <path
            d={points}
            fill="none"
            stroke="#B4975A"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
    </div>
  )
}