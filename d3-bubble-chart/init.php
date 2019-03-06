<?php

// register the visualization
DatawrapperVisualization::register($plugin, [
    /*
     * The unique visualization id (not to be confused with the plugin id)
     */
    "id" => "bubble-chart",

    /*
     * The title displayed in the editor UI. Wrap in __() to make it
     * localizable.
     */
    "title" => "Bubble Chart (d3)",

    /*
     * Libraries that are used by the visualization.
     */
    "libraries" => array(array(
        "local" => "vendor/d3.min.js",
        "cdn" => "//cdnjs.cloudflare.com/ajax/libs/d3/3.3.11/d3.min.js"
    )),

    /*
     * The LESS file that contains the visualization's styling.
     */
    "less" => dirname(__FILE__ ) . "/static/bubble-chart.less",

    /*
     * The axes (or dimensions) provided by the visualization. The bubble
     * chart provides three axes for the bubble radius (size), fill (color)
     * and label.
     */
    "axes" => array(
        "label" => array(
            "accepts" => array("text", "date")
        ),
        "size" => array(
            "accepts" => array("number")
        )
    ),

    /*
     * Config options that are displayed to the user in the right
     * sidebar in the chart editor.
     */
    "options" => array(
        "show-labels" => array(
            "type" => "checkbox",
            "label" => "Show bubble labels",
            "default" => true
        )
    ),
]);
