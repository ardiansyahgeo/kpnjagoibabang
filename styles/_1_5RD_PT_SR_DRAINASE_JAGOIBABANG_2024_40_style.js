var size = 0;
var placement = 'point';
function categories__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_40(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Bangunan Tampungan (Polder)':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.6 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(31,120,180,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_40 = function(feature, resolution){
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
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_40(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
