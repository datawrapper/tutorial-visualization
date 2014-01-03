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
        );

        // register the visualization
        DatawrapperVisualization::register($this, $visMeta);
    }

}