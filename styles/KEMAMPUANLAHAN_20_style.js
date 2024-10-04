var size = 0;
var placement = 'point';
function categories_KEMAMPUANLAHAN_20(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'RENDAH':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,245,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SEDANG':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,164,134,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'TINGGI':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,55,42,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SANGAT TINGGI':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(103,0,13,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_KEMAMPUANLAHAN_20 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("KMP_LAHAN");
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
    
var style = categories_KEMAMPUANLAHAN_20(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
