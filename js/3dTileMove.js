import {tileset} from './Cesium-init';
var Cesium =  require('cesium/Build/Cesium/Cesium');
// var Cesium =  require('./CesiumModule');


function moveTo(lng, lat, height) {
    var boundingSphere = tileset.boundingSphere;
    var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
    var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
    var offset = Cesium.Cartesian3.fromRadians(lng, lat, height);
    var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
    tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
}

function getCenter() {
    var boundingSphere = tileset.boundingSphere;
    var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
    return cartographic;
}

export {
    moveTo,
    getCenter
}