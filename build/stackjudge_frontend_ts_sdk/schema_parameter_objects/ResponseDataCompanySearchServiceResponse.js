"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDataCompanySearchServiceResponse = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class ResponseDataCompanySearchServiceResponse {
    data;
    success;
    errorCode;
    requestId;
    constructor(data, success, errorCode, requestId) {
        this.data = data;
        this.success = success;
        this.errorCode = errorCode;
        this.requestId = requestId;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("data", this.data.toSdkString()) //#/components/schemas/CompanySearchServiceResponse
            .set("success", Boolean(this.success).toString()) //boolean
            .set("errorCode", this.errorCode.toString(10)) //integer
            .set("requestId", this.requestId) //string
        ;
    }
    toOpenSdkJson() {
        return {
            "data": this.data.toSdkString(),
            "success": this.success,
            "errorCode": this.errorCode,
            "requestId": this.requestId,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.ResponseDataCompanySearchServiceResponse = ResponseDataCompanySearchServiceResponse;
//# sourceMappingURL=ResponseDataCompanySearchServiceResponse.js.map