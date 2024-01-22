"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRequest = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class GetRequest {
    companyId;
    requestRelationIds;
    constructor(companyId, requestRelationIds) {
        this.companyId = companyId;
        this.requestRelationIds = requestRelationIds;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("companyId", this.companyId.toString(10)) //integer
            .set("requestRelationIds", this.toSdkStringFromType(this.requestRelationIds)) //array
        ;
    }
    toOpenSdkJson() {
        return {
            "companyId": this.companyId,
            "requestRelationIds": this.requestRelationIds,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.GetRequest = GetRequest;
//# sourceMappingURL=GetRequest.js.map