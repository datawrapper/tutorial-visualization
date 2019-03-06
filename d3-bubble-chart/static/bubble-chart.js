(function () {

    dw.visualization.register('bubble-chart', {

        render: function(el, dataset, axes, theme, chart) {
            var $element = $(el),
                me = this,
                dataset = me.dataset,
                axes = me.axes(true),
                theme = me.theme(),
                chart = me.chart();

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
                .attr("class", function(d) {                                  
                    return (me.get('highlighted-series', []).indexOf(d.label) > -1) ? "node highlighted" : "node";
                })
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

            if (this.get('show-labels')) {
                node.append("text")
                    .attr("text-anchor", "middle")
                    .attr("dy", ".3em")
                    .attr("class", function(d) {
                        return d3.lab(theme.colors.palette[0]).l < 80 ? "inverted" : "";
                    })
                    .text(function(d) {
                        return d.label.substring(0, d.r / 5);
                    });
            }
        },

        keys: function() {
            var vis = this,
                axes = vis.axes(true);

            if (axes.label) {
                var fmt = vis.chart().columnFormatter(axes.label),
                    keys = [];
                
                axes.label.each(function(val) {
                    var v = String(fmt(val));
                    if (keys.indexOf(v) == -1) keys.push(v);
                });

                return keys;
            }

            return [];
        }

    });

}).call(this);
