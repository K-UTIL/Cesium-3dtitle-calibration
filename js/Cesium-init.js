import $ from 'jquery';
console.log($)
import defined from './defined';
import {getCenter, moveTo} from './3dTileMove';
// import Cesium from 'cesium';
var Cesium =  require('cesium/Build/Cesium/Cesium');
// var Cesium =  require('./CesiumModule');
import {flyTo} from "./camaraFly";
import {copy} from "./Copy";
// import {KnobInput} from '../node_modules/precision-inputs/common/precision-inputs.base';
let pre = require('../node_modules/precision-inputs/common/precision-inputs.base');
console.log(pre)

let viewer = new Cesium.Viewer("map_container");
let tile = null;
let knobInput = new KnobInput($("#adjust_lng")
,$("#adjust_lng .knob-visuals"));



$("#init").on('click', function (e) {
    let url = $("#tile_url").val();
    if (defined(url)) {
        if (defined(tile))
            viewer.scene.primitives.remove(tile);
        tile = new Cesium.Cesium3DTileset({
            url: url
        });
        tile.readyPromise.then(function (titleset) {
            viewer.scene.primitives.add(tileset);
            var boundingSphere = tileset.boundingSphere;
            var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
            moveTo(cartographic.longitude, cartographic.latitude, heightOffset);
            flyTo(cartographic.longitude, cartographic.latitude, heightOffset);
        })
    }
});

$("#moveTo").on('click', function (e) {
    let lat = $('#lat').val();
    let lng = $('#lng').val();
    let height = $('#height').val();
    moveTo(lng, lat, height);
    flyTo(lng, lat, height);
});

$("#export").on('click', function (e) {
    let center = getCenter();
    let copyString = JSON.stringify(center);
    copy(copyString);
    alert(copyString + '\n已复制到剪贴板');
});


export {
    viewer,
    tile as tileset,
}