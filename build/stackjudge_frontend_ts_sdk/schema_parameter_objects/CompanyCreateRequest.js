"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateRequest = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class CompanyCreateRequest {
    name;
    domain;
    companySizeId;
    itSizeId;
    constructor(name, domain, companySizeId, itSizeId) {
        this.name = name;
        this.domain = domain;
        this.companySizeId = companySizeId;
        this.itSizeId = itSizeId;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("name", this.name) //string
            .set("domain", this.domain) //string
            .set("companySizeId", this.companySizeId.toString(10)) //integer
            .set("itSizeId", this.itSizeId.toString(10)) //integer
        ;
    }
    toOpenSdkJson() {
        return {
            "name": this.name,
            "domain": this.domain,
            "companySizeId": this.companySizeId,
            "itSizeId": this.itSizeId,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.CompanyCreateRequest = CompanyCreateRequest;
//# sourceMappingURL=CompanyCreateRequest.js.map