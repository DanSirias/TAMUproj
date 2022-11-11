

//Column Chart

function chartColumn(){
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350]
  ]);

  var options = {
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    },
    chartArea: {
      // leave room for y-axis labels
      width: '94%'
    },
    legend: {
      position: 'top'
    },
    width: '100%'
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
}

function ChartLine(){
//Line Chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Age', 'Weight'],
    [ 8,      12],
    [ 4,      5.5],
    [ 11,     14],
    [ 4,      5],
    [ 3,      3.5],
    [ 6.5,    7]
  ]);

  var options = {
    title: 'Age vs. Weight comparison',
    hAxis: {title: 'Age', minValue: 0, maxValue: 15},
    vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
    legend: 'none'
  };
  var chart = new google.visualization.ScatterChart(document.getElementById('chart_div_line'));
  chart.draw(data, options);
}
}

chartColumn(); 
ChartLine(); 