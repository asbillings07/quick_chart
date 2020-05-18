export const barOptions = {
  legend: {
    spanGaps: true,
    display: true,
    position: 'left',
    align: 'start',
    fullWidth: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        },
        stacked: false
      }
    ],
    xAxes: [
      {
        stacked: false
      }
    ]
  }
}
