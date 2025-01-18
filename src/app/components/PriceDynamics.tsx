"use client"

import { useState, useEffect } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

const initialData = [
  { month: "Jan", value: 420 },
  { month: "Feb", value: 450 },
  { month: "Mar", value: 380 },
  { month: "Apr", value: 520 },
  { month: "May", value: 480 },
  { month: "Jun", value: 400 },
  { month: "Jul", value: 380 },
  { month: "Aug", value: 360 },
  { month: "Sep", value: 410 },
  { month: "Oct", value: 390 },
  { month: "Nov", value: 380 },
  { month: "Dec", value: 450 },
]

export default function PriceDynamics() {
  const [selectedMetal, setSelectedMetal] = useState("Gold")
  const [selectedCurrency, setSelectedCurrency] = useState("EUR")
  const [data, setData] = useState(initialData)

  useEffect(() => {
    const fetchData = async () => {
      const newData =
        selectedMetal === "Gold"
          ? initialData.map((d) => ({
              ...d,
              value: d.value + Math.random() * 100 - 50,
            }))
          : initialData.map((d) => ({
              ...d,
              value: d.value + Math.random() * 50 - 25,
            }))
      setData(newData)
    }
    fetchData()
  }, [selectedMetal, selectedCurrency])

  return (
    <div className="md:mx-5">
 <div className="bg-black p-4 md:p-10 md:mx-auto mx-5 max-w-5xl md:container rounded-xl mb-16 md:my-10">
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
        Price Dynamics
      </h2>
      <Card>
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div className="flex gap-2">
              {["Gold", "Silver"].map((metal) => (
                <Button
                  key={metal}
                  variant={selectedMetal === metal ? "default" : "ghost"}
                  className={`rounded-full text-sm ${
                    selectedMetal === metal
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setSelectedMetal(metal)}
                >
                  {metal}
                </Button>
              ))}
            </div>

            <div className="flex gap-2">
              {["DKK", "EUR", "USD"].map((currency) => (
                <Button
                  key={currency}
                  variant={selectedCurrency === currency ? "default" : "ghost"}
                  className={`rounded-full text-sm ${
                    selectedCurrency === currency
                      ? "bg-black text-white"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setSelectedCurrency(currency)}
                >
                  {currency}
                </Button>
              ))}
            </div>
          </div>

          <div className="w-full border-t mb-4" />

          <div className="flex items-center gap-2 mb-6">
            <span className="text-xl md:text-2xl font-bold">€ 298.92</span>
            <span className="text-sm bg-[#FFBDBD] text-[#19161D] px-2 py-1 rounded-full">
              -0.18%
            </span>
          </div>

          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#B4975A" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#B4975A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  vertical={false} 
                  stroke="#E5E7EB" 
                  strokeDasharray="3 3" 
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  padding={{ left: 20, right: 20 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  width={40}
                  domain={[0, 1200]}
                  ticks={[0, 200, 400, 600, 800, 1000, 1200]}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#B4975A"
                  strokeWidth={2}
                  fill="url(#colorValue)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
   
  )
}

