var	pie_margin = {top: 35, right: 5, bottom: 5, left: 15},
    pie_width = 350 - pie_margin.left - pie_margin.right,
    pie_height = 220 - pie_margin.top - pie_margin.bottom,
    pie_radius = Math.min(pie_width, pie_height) / 2;

var	chart2 = d3.select("#pie-chart")
    .append("svg:svg")
    .attr("width", pie_width + pie_margin.left + pie_margin.right)
    .attr("height", pie_height + pie_margin.top + pie_margin.bottom)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var color = d3.scaleOrdinal(["#FFA07A", "#87CEEB", "#FF8C00"]);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.population; });

var path = d3.arc()
    .outerRadius(pie_radius - 10)
    .innerRadius(0);

var label = d3.arc()
    .outerRadius(pie_radius - 40)
    .innerRadius(pie_radius - 40);

d3.csv("data.csv", function(d) {
  d.population = +d.population;
  return d;
}, function(error, data) {
  if (error) throw error;

  var arc = chart2.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  arc.append("path")
      .attr("d", path)
      .attr("fill", function(d) { return color(d.data.age); });

  arc.append("text")
      .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
      .attr("dy", "0.35em")
      .text(function(d) { return d.data.age; });
});