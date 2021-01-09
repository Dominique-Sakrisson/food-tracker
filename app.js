// Load Charts and the bar package.
google.charts.load("current", { packages: ["bar"] });
// Draw the bar charts when charts is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Define the first chart to be drawn.
    var data = google.visualization.arrayToDataTable([
      ["Macro Type", "Consumed", "Goal", { role: "annotation" }],
      ["Carbs (g)", getTotalCarbs(), 237.5, "Carbs"],
      ["Fat (g)", getTotalFat(), 70, "Fat"],
      ["Protein (g)", getTotalPro(), 155, "Protein"],
    ]);
    //options for first chart
    var options = {
      chart: {
        title: "Nutrients to Daily Goal",
        subtitle: "Carbohydrates, Fat and Protein Measured in grams",
      },
      bars: "horizontal",
    };
  
    //Define the 2nd chart to be drawn
    var data2 = google.visualization.arrayToDataTable([
      ["Calories", "Consumed", "Goal", { role: "annotation" }],
      ["Calories", getTotalCals(), 2200, "calories"],
    ]);
    //options for 2nd chart
    var options2 = {
      chart: {
        title: "Calories to Daily Goal",
        subtitle: "Calories",
      },
      bars: "horizontal",
    };
  
    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById("chart_1"));
    chart.draw(data, options);
    var chart2 = new google.charts.Bar(document.getElementById("chart_2"));
    chart2.draw(data2, options2);
  }
  drawChart();