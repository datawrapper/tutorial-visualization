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
            // let's see if this worked
            console.log(data);
        }

    });

}).call(this);