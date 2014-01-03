(function () {

    dw.visualization.register('bubble-chart', {

        render: function($element, dataset, axes, theme) {
            // create the empty structure
            var data = { children: [] };
            // loop over each row in our dataset
            dataset.eachRow(function(i) {
                // append new objects for each row
                // with the values from the axes
                data.children.push({
                    label: axes.label.val(i),
                    value: axes.size.val(i)
                });
            });

            // the actual D3 code starts below this
            // adapted from https://gist.github.com/mbostock/4063269

            var size = this.size(),  // returns array [w, h]
                diameter = Math.min(size[0], size[1]),
                format = d3.format(",d");

            var bubble = d3.layout.pack()
                .sort(null)
                .size([diameter, diameter])
                .padding(1.5);

            var vis = d3.select($element.get(0)).append("svg")
                .attr("width", diameter)
                .attr("height", diameter)
                .style("margin-left", (size[0] - diameter) / 2)
                .attr("class", "bubble");

            var node = vis.selectAll("g.node")
                .data(bubble.nodes(data)
                    .filter(function(d) { return !d.children; }))
            .enter().append("g")
                .attr("class", "node")
                .attr("transform", function(d) {
                    return "translate(" + d.x + "," + d.y + ")";
                });

            node.append("title")
                .text(function(d) {
                    return d.label + ": " + format(d.value);
                });

            node.append("circle")
                .attr("r", function(d) { return d.r; })
                .style("fill", theme.colors.palette[0]);

            node.append("text")
                .attr("text-anchor", "middle")
                .attr("dy", ".3em")
                .text(function(d) {
                    return d.label.substring(0, d.r / 5);
                });
        }

    });

}).call(this);