import React, { useRef } from 'react'
import { Chart } from '../../resuables'
import { barOptions, barData } from '../../chart_data'

export const AllDataChart = () => {
  const chartRef = useRef()

  return (
    <div>
      <header>
        <h1>Bar Chart DashBoard</h1>
      </header>
      <Chart
        chartName='BarChart'
        chartRef={chartRef}
        chartType='bar'
        data={barData}
        options={barOptions}
        height='50%'
        width='75%'
      />
    </div>
  )
}
