"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticMapResponse = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class StaticMapResponse {
    location;
    mapPositionEnum;
    constructor(location, mapPositionEnum) {
        this.location = location;
        this.mapPositionEnum = mapPositionEnum;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("location", this.location) //string
            .set("mapPositionEnum", this.mapPositionEnum) //string
        ;
    }
    toOpenSdkJson() {
        return {
            "location": this.location,
            "mapPositionEnum": this.mapPositionEnum,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.StaticMapResponse = StaticMapResponse;
//# sourceMappingURL=StaticMapResponse.js.map