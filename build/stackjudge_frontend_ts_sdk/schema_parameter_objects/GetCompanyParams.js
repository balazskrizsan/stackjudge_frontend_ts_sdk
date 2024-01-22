"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCompanyParams = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class GetCompanyParams {
    seekId;
    limit;
    requestRelationIds;
    navigationId;
    constructor(seekId, limit, requestRelationIds, navigationId) {
        this.seekId = seekId;
        this.limit = limit;
        this.requestRelationIds = requestRelationIds;
        this.navigationId = navigationId;
    }
    toOpenSdkGet() {
        return this.toOpenSdkJson();
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("seekId", this.seekId.toString(10)) //integer
            .set("limit", this.limit.toString(10)) //integer
            .set("requestRelationIds", this.toSdkStringFromType(this.requestRelationIds)) //array
            .set("navigationId", this.navigationId.toString(10)) //integer
        ;
    }
    toOpenSdkJson() {
        return {
            "seekId": this.seekId,
            "limit": this.limit,
            "requestRelationIds": this.requestRelationIds,
            "navigationId": this.navigationId,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.GetCompanyParams = GetCompanyParams;
//# sourceMappingURL=GetCompanyParams.js.map