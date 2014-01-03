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
            "title" => "Bubble Chart (d3)"
        );

        // register the visualization
        DatawrapperVisualization::register($this, $visMeta);
    }

}