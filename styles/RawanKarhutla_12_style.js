var size = 0;
var placement = 'point';
function categories_RawanKarhutla_12(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Rawan Kebakaran Rendah':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(236,236,235,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rawan Kebakaran Sedang':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(231,209,158,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rawan Kebakaran Tinggi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,198,53,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rawan Kebakaran Sangat Tinggi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,127,0,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_RawanKarhutla_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("raw_karhut");
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
    
var style = categories_RawanKarhutla_12(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
