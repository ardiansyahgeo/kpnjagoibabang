var size = 0;
var placement = 'point';
function categories__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_34(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Jalur Evakuasi Bencana':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,120,180,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jalur Inspeksi dan Patroli Perbatasan':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(229,57,149,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jaringan Pejalan Kaki':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(33,42,221,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_34 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NAMOBJ");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_34(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
