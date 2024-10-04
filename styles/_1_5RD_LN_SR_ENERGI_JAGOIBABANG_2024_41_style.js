var size = 0;
var placement = 'point';
function categories__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_41(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Saluran Udara Tegangan Ekstra Tinggi (SUTET)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(239,152,13,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Saluran Udara Tegangan Menengah (SUTM)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(246,199,123,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_41 = function(feature, resolution){
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
    
var style = categories__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_41(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
