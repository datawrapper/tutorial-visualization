<?php

class DatawrapperPlugin_D3BubbleChart extends DatawrapperPlugin {

    public function init(){
        // define the visualization meta
        $visMeta = array(
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

            /*
             * Here we define the axis that is used as
             * row keys for the highlight feature
             */
            "highlight-key" => "label"
        );

        // register the visualization
        DatawrapperVisualization::register($this, $visMeta);
    }

}