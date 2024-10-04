var size = 0;
var placement = 'point';
function categories_Geomorfologi_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Alluvial Plains':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(138,208,236,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Alluvial Valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(220,142,17,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(109,209,103,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mountains':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(61,69,221,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Plains':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(190,113,237,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Swamps':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(229,61,69,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Terraces':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(198,231,114,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tidal Swamps':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(41,237,162,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Geomorfologi_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("UNITNAME");
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
    
var style = categories_Geomorfologi_10(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
