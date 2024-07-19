var size = 0;
var placement = 'point';
function categories_RawanLongsor_14(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Rawan Longsor Rendah':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,245,240,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rawan Longsor Sedang':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,164,134,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rawan Longsor Tinggi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,55,42,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rawan Longsor Sangat Tinggi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(103,0,13,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_RawanLongsor_14 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("raw_longso");
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
    
var style = categories_RawanLongsor_14(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
