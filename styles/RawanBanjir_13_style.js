var size = 0;
var placement = 'point';
function categories_RawanBanjir_13(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Rawan Banjir Rendah':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,251,255,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rawan Banjir Sedang':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(175,209,231,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rawan Banjir Tinggi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(62,142,196,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rawan Banjir Sangat Tinggi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(8,48,107,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_RawanBanjir_13 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("raw_banjir");
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
    
var style = categories_RawanBanjir_13(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
