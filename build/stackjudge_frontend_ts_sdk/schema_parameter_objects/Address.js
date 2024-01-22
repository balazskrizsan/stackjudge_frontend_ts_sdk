"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class Address {
    id;
    companyId;
    fullAddress;
    markerLat;
    markerLng;
    manualMarkerLat;
    manualMarkerLng;
    createdAt;
    createdBy;
    constructor(id, companyId, fullAddress, markerLat, markerLng, manualMarkerLat, manualMarkerLng, createdAt, createdBy) {
        this.id = id;
        this.companyId = companyId;
        this.fullAddress = fullAddress;
        this.markerLat = markerLat;
        this.markerLng = markerLng;
        this.manualMarkerLat = manualMarkerLat;
        this.manualMarkerLng = manualMarkerLng;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("id", this.id.toString(10)) //integer
            .set("companyId", this.companyId.toString(10)) //integer
            .set("fullAddress", this.fullAddress) //string
            .set("markerLat", this.markerLat.toString(10)) //number
            .set("markerLng", this.markerLng.toString(10)) //number
            .set("manualMarkerLat", this.manualMarkerLat.toString(10)) //number
            .set("manualMarkerLng", this.manualMarkerLng.toString(10)) //number
            .set("createdAt", this.createdAt) //string
            .set("createdBy", this.createdBy) //string
        ;
    }
    toOpenSdkJson() {
        return {
            "id": this.id,
            "companyId": this.companyId,
            "fullAddress": this.fullAddress,
            "markerLat": this.markerLat,
            "markerLng": this.markerLng,
            "manualMarkerLat": this.manualMarkerLat,
            "manualMarkerLng": this.manualMarkerLng,
            "createdAt": this.createdAt,
            "createdBy": this.createdBy,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.Address = Address;
//# sourceMappingURL=Address.js.map