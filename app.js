//two options for loading and displaying the chart
//either with a callback function
//or the way I like
//adding a promise to call the function after the load executes

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart'/*, 'table'*/]}).then(drawChart);

// Set a callback to run when the Google Visualization API is loaded.
//google.charts.setOnLoadCallback(drawChart);


//reasoning behind drawing two charts at once:
//each chart gets its information from the food that is added to daily eaten foods
//one chart being the nutrients
//other chart being calories
function drawChart() {
/*
    //This is the alorithm for the data once we get there
    //
    // Define the first chart to be drawn.
    var data1 = google.visualization.arrayToDataTable([
      ["Macro Type", "Consumed", "Goal", { role: "annotation" }],
      ["Carbs (g)", getTotalCarbs(), 237.5, "Carbs"],
      ["Fat (g)", getTotalFat(), 70, "Fat"],
      ["Protein (g)", getTotalPro(), 155, "Protein"],
    ]);

    //Define the 2nd chart to be drawn
     var data2 = google.visualization.arrayToDataTable([
      ["Calories", "Consumed", "Goal", { role: "annotation" }],
      ["Calories", getTotalCals(), 2200, "calories"],
    ]);
*/
//this is the data to get the charts going hard coded
  var data1, data2;
  
  data1 = new google.visualization.DataTable();
  data1.addColumn('string', 'Topping');
  data1.addColumn('number', 'Slices');
  data1.addColumn('number', 'calories');
  data1.addRows([
    ['Mushrooms', 3, 10],
    ['Onions', 1, 11],
    ['Olives', 1, 12],
    ['Zuccini', 1, 13],
    ['Pepperoni', 2, 14],
  ]);

  data2 = new google.visualization.DataTable();
  data2.addColumn('string', 'Topping');
  data2.addColumn('number', 'Slices');
  data2.addColumn('number', 'calories');
  data2.addRows([
    ['Mushrooms', 5, 100],
    ['Onions', 5, 110],
    ['Olives', 5, 120],
    ['Zuccini', 5, 130],
    ['Pepperoni', 5, 140],
  ]);

  //options for first chart
  var options = {
    chart: {
      title: "Nutrients to Daily Goal",
      subtitle: "Carbohydrates, Fat and Protein Measured in grams",
    },
    bars: "horizontal",
  };

  //options for 2nd chart
  var options2 = {
    chart: {
      title: "Calories to Daily Goal",
      subtitle: "Calories",
    },
    bars: "horizontal",
  };

  // Instantiate and draw the chart.
  var chart1 = new google.visualization.BarChart(document.getElementById("chart-1"));
  var chart2 = new google.visualization.BarChart(document.getElementById("chart-2"));

  chart1.draw(data1, options);
  chart2.draw(data2, options2);
}
  