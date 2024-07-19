var size = 0;
var placement = 'point';

var style_FungsiPendidikan_29 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("TOPONIM") !== null && resolution > 0 && resolution < 4) {
        labelText = String(feature.get("TOPONIM"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
             fill: new ol.style.Fill({color: 'rgba(250,233,41,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
