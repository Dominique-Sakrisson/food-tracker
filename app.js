
// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'table']}).then(drawChart).then(drawTable);
// Set a callback to run when the Google Visualization API is loaded.
//instead there is a promise to call drawchart above
//google.charts.setOnLoadCallback(drawTable);

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

function drawTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('number', 'Salary');
  data.addColumn('boolean', 'Full Time');
  data.addRows(5);
  data.setCell(0, 0, 'John');
  data.setCell(0, 1, 10000, '$10,000');
  data.setCell(0, 2, true);
  data.setCell(1, 0, 'Mary');
  data.setCell(1, 1, 25000, '$25,000');
  data.setCell(1, 2, true);
  data.setCell(2, 0, 'Steve');
  data.setCell(2, 1, 8000, '$8,000');
  data.setCell(2, 2, false);
  data.setCell(3, 0, 'Ellen');
  data.setCell(3, 1, 20000, '$20,000');
  data.setCell(3, 2, true);
  data.setCell(4, 0, 'Mike');
  data.setCell(4, 1, 12000, '$12,000');
  data.setCell(4, 2, false);

  var table = new google.visualization.Table(document.getElementById('table-1'));
  table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});

  google.visualization.events.addListener(table, 'select', function() {
    var row = table.getSelection()[0].row;
    alert('You selected ' + data.getValue(row, 0));
  });
}
  