"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyOwners = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class CompanyOwners {
    companyId;
    owners;
    constructor(companyId, owners) {
        this.companyId = companyId;
        this.owners = owners;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("companyId", this.companyId.toString(10)) //integer
            .set("owners", this.toSdkStringFromType(this.owners)) //array
        ;
    }
    toOpenSdkJson() {
        return {
            "companyId": this.companyId,
            "owners": this.owners,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.CompanyOwners = CompanyOwners;
//# sourceMappingURL=CompanyOwners.js.map