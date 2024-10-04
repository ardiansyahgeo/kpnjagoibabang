var size = 0;
var placement = 'point';

var style_LandvalueCapture_30 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("TBOT");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 16.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 16.000000 && value <= 20.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,191,191,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 20.000000 && value <= 24.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,128,128,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24.000000 && value <= 30.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,64,64,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 30.000000 && value <= 52.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
