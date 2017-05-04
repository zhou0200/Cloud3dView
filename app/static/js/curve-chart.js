var curve_margin = {top: 20, right: 10, bottom: 30, left: 60},
    curve_width = 500 - curve_margin.left - curve_margin.right,
    curve_height = 220 - curve_margin.top - curve_margin.bottom;

var parseTime = d3.timeParse("%d-%m-%y %H:%M");

function add_data(chart_id, tsv_file, column_name) {
    // remove old form
    d3.select('#' + chart_id + ' svg').remove();

    var chart_monitor = d3.select("#" + chart_id)
        .append("svg:svg")
        .attr("width", curve_width + curve_margin.left + curve_margin.right)
        .attr("height", curve_height + curve_margin.top + curve_margin.bottom)
        .append("g")
        .attr("transform", "translate(" + curve_margin.left + "," + curve_margin.top + ")");

    var xScale = d3.scaleTime().range([0, curve_width]),
        yScale = d3.scaleLinear().range([curve_height, 0]);

    d3.tsv(tsv_file, type, function(error, data) {
        if (error) throw error;

        xScale.domain(d3.extent(data, function(d) { return d.date; }));

        yScale.domain([
            d3.min(data, function (d) {
                return d[column_name] - 1;
            }),
            d3.max(data, function (d) {
                return d[column_name] + 1;
            })
        ]);

        chart_monitor.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + curve_height + ")")
            .call(d3.axisBottom(xScale));

        chart_monitor.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(yScale))
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("fill", "#000")
            .text(column_name);

        var line = d3.line()
            .curve(d3.curveBasis)
            .x(function(d) { return xScale(d.date); })
            .y(function(d) { return yScale(d[column_name]); });

        chart_monitor.append('path')
            .attr("class", "line")
            .attr("d", line(data));
    });
}

function draw_curve_by_tsv(tsv_file) {
    add_data('chart_monitor_1', tsv_file, 'Power Effectiveness Usage');
    add_data('chart_monitor_2', tsv_file, 'Power for ICT (KWh)');
    add_data('chart_monitor_3', tsv_file, 'Power for Cooling (KWh)');
}

function draw_curve() {
    var time_zone_select = document.getElementById("select-time-zone");
    var select_value = time_zone_select.options[time_zone_select.selectedIndex].value;
    var tsv_list = ['curve_data_day.tsv', 'curve_data_week.tsv', 'curve_data_month.tsv']
    draw_curve_by_tsv(tsv_list[select_value]);
}

draw_curve_by_tsv('curve_data_day.tsv');

function type(d, _, columns) {
    console.log(d.date);
    d.date = parseTime(d.date);
    console.log(d.date);
    for (var i = 1, n = columns.length, c; i < n; ++i){
        d[c = columns[i]] = +d[c];
        console.log(d[c = columns[i]]);
    }
    return d;
}