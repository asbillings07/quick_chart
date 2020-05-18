import PropTypes from 'prop-types'
import React, { useEffect, useCallback } from 'react'
import Chart from 'chart.js'

const ChartTemplate = ({ chartName, chartRef, chartType, data, options, width, height }) => {
  const drawChart = useCallback(() => {
    const myChartRef = chartRef.current.getContext('2d')

    new Chart(myChartRef, {
      type: chartType,
      data,
      options
    })
  }, [chartRef, chartType, data, options])

  useEffect(() => {
    drawChart()

    return () => {
      drawChart()
    }
  }, [drawChart])

  return (
    <div style={{ width: width ? width : '900px', height: height ? height : '1000px' }}>
      <canvas id={chartName} ref={chartRef} />
    </div>
  )
}

Chart.propTypes = {
  chartName: PropTypes.string.isRequired,
  chartRef: PropTypes.func.isRequired,
  chartType: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string
}

export { ChartTemplate as Chart }
