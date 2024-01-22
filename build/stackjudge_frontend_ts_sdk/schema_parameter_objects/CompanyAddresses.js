"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAddresses = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class CompanyAddresses {
    companyId;
    addresses;
    constructor(companyId, addresses) {
        this.companyId = companyId;
        this.addresses = addresses;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("companyId", this.companyId.toString(10)) //integer
            .set("addresses", this.toSdkStringFromType(this.addresses)) //array
        ;
    }
    toOpenSdkJson() {
        return {
            "companyId": this.companyId,
            "addresses": this.addresses,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.CompanyAddresses = CompanyAddresses;
//# sourceMappingURL=CompanyAddresses.js.map