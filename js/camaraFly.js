import {viewer} from './Cesium-init';
var Cesium =  require('cesium/Build/Cesium/Cesium');
// var Cesium =  require('./CesiumModule');


function flyTo(lng, lat, height) {
    viewer.scene.camera.flyTo({
        destination: Cesium.Cartesian3.fromRadians(lng, lat, height + 200)
    });

}

export {
    flyTo
}