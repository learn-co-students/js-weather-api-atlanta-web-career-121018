function formatHours(hourlyData){
  return hourlyData.map(element => {
    const myDate = new Date(element.time * 1000).getHours();
    return myDate
  }) 
}

function formatFahrenheit(hourlyData){
  return hourlyData.map(element => {
    return element.temperature;
  })
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
  
  // fetch(endpoint)
  //   .then(res => res.json())
  //   .then(json => buildLineGraph(json)); 
     
    // function buildLineGraph(json) {
    //   let hourlyData = json['hourly']['data'] 
    //     hourlyData.map(element => {
    //       console.log((element.time * 1000).gethours)
    //     })

    fetchData()
    function fetchData() {
      fetch(endpoint).then(function (response) {
        response.json().then(function (data) {
          let hours = formatHours(data['hourly']['data']);
          console.log(hours);
          let temperatures = formatFahrenheit(data['hourly']['data']);
          generateDataSet(hours,temperatures);
        })
      })
    }



}
