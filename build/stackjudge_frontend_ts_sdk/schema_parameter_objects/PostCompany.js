"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCompany = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class PostCompany {
    company;
    address;
    companyLogo;
    constructor(company, address, companyLogo) {
        this.company = company;
        this.address = address;
        this.companyLogo = companyLogo;
    }
    toOpenSdkPost() {
        return this.toOpenSdkJson();
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("company", this.company.toSdkString()) //#/components/schemas/CompanyCreateRequest
            .set("address", this.address.toSdkString()) //#/components/schemas/AddressCreateRequest
            .set("companyLogo", this.companyLogo) //binary
        ;
    }
    toOpenSdkJson() {
        return {
            "company": this.company.toSdkString(),
            "address": this.address.toSdkString(),
            "companyLogo": this.companyLogo,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.PostCompany = PostCompany;
//# sourceMappingURL=PostCompany.js.map