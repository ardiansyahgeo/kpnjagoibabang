var size = 0;
var placement = 'point';
function categories_KesesuaianPengembanganWilayahSMCA_17(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Tidak Sesuai':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,25,28,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cukup Sesuai':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,201,128,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kurang Sesuai':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(199,232,173,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sangat Sesuai':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(51,160,44,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_KesesuaianPengembanganWilayahSMCA_17 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("SMCA");
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
    
var style = categories_KesesuaianPengembanganWilayahSMCA_17(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
