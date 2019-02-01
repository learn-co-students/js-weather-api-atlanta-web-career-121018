


function formatHours(hourlyData){
    // console.log(hourlyData.data)
    let newArray = [];
    hourlyData.data.forEach(function(data){
            let time = (new Date(data.time * 1000).getHours())
            newArray.push(time)
    })
    return newArray
};

function formatFahrenheit(hourlyData){
    let newArray = [];
    hourlyData.data.forEach(function(data){
            let temp = data.temperature
            newArray.push(temp)
    })
    return newArray
}

function generateDataSet(hours, temperatures) {
  return {
    type: "line",
    data: {
      labels: hours,
      datasets: [
        {
          label: "NYC Weather Data",
          data: temperatures,
          backgroundColor: "rgba(100,150,220,0.2)",
          borderColor: "rgb(255, 99, 132)"
        }
      ]
    },
    options: {
      // additional configurations here
    }
  }
}


function makeRequest(endpoint, canvas) {
    fetch(endpoint)
    .then(res => res.json())
    .then(res => {
        let hourlyData = res.hourly
        new Chart(canvas, generateDataSet(formatHours(hourlyData), formatFahrenheit(hourlyData)))
    })
};

  // Your code goes here
  // After your fetch works - format the response using the helper functions above:
  // convert darksky timestamps
  // const formattedHours = formatHours(/*data from darksky*/)
  // extract temperatures from darksky data
  // const formattedTemps = formatFahrenheit(/*data from darksky*/)
  // create config object for chart.js
  // const chartDataset = generateDataSet(formattedHours, formattedTemps)
  // append the chart to the DOM
  // new Chart(canvas, chartDataset)
