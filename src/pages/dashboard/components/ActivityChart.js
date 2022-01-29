import React from 'react'
import ApexCharts from 'react-apexcharts'

const series = [
  {
    name: 'Atividades realizadas',
    type: 'column',
    data: [28, 29, 24, 25, 33, 29, 23]
  },
  {
    name: 'Meta de atividades',
    type: 'line',
    data: [30, 26, 28, 32, 37, 24, 28]
  }
]

const chartSettings = {
  colors: ['#FFCA41', '#43BC13'],
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false
    }
  },
  stroke: {
    curve: 'straight',
    width: [0, 1]
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
    style: {
      fontSize: '10px',
      fontWeight: 500
    },
    background: {
      borderWidth: 0
    }
  },
  labels: ['01-02', '03-04', '05-06', '07-08', '09-10', '11-12', '12-13'],
  legend: {
    position: 'top',
    floating: true
  },
  xaxis: {
    type: 'category',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: true,
      style: {
        colors: '#6B859E'
      }
    }
  },
  yaxis: {
    show: false
  },
  fill: {
    type: 'solid',
    opacity: 1
  },
  plotOptions: {
    bar: {
      borderRadius: 10
    }
  },
  grid: {
    show: false
  }
}

export default function ApexActivityChart() {
  return (
    <ApexCharts
      options={chartSettings}
      series={series}
      type="area"
      height={275}
    />
  )
}
