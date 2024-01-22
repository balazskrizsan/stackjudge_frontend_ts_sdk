"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateRequest = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class AddressCreateRequest {
    fullAddress;
    markerLat;
    markerLng;
    manualMarkerLat;
    manualMarkerLng;
    constructor(fullAddress, markerLat, markerLng, manualMarkerLat, manualMarkerLng) {
        this.fullAddress = fullAddress;
        this.markerLat = markerLat;
        this.markerLng = markerLng;
        this.manualMarkerLat = manualMarkerLat;
        this.manualMarkerLng = manualMarkerLng;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("fullAddress", this.fullAddress) //string
            .set("markerLat", this.markerLat.toString(10)) //number
            .set("markerLng", this.markerLng.toString(10)) //number
            .set("manualMarkerLat", this.manualMarkerLat.toString(10)) //number
            .set("manualMarkerLng", this.manualMarkerLng.toString(10)) //number
        ;
    }
    toOpenSdkJson() {
        return {
            "fullAddress": this.fullAddress,
            "markerLat": this.markerLat,
            "markerLng": this.markerLng,
            "manualMarkerLat": this.manualMarkerLat,
            "manualMarkerLng": this.manualMarkerLng,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.AddressCreateRequest = AddressCreateRequest;
//# sourceMappingURL=AddressCreateRequest.js.map