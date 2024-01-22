"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class Company {
    id;
    name;
    domain;
    companySizeId;
    itSizeId;
    logoPath;
    createdAt;
    createdBy;
    constructor(id, name, domain, companySizeId, itSizeId, logoPath, createdAt, createdBy) {
        this.id = id;
        this.name = name;
        this.domain = domain;
        this.companySizeId = companySizeId;
        this.itSizeId = itSizeId;
        this.logoPath = logoPath;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("id", this.id.toString(10)) //integer
            .set("name", this.name) //string
            .set("domain", this.domain) //string
            .set("companySizeId", this.companySizeId.toString(10)) //integer
            .set("itSizeId", this.itSizeId.toString(10)) //integer
            .set("logoPath", this.logoPath) //string
            .set("createdAt", this.createdAt) //string
            .set("createdBy", this.createdBy) //string
        ;
    }
    toOpenSdkJson() {
        return {
            "id": this.id,
            "name": this.name,
            "domain": this.domain,
            "companySizeId": this.companySizeId,
            "itSizeId": this.itSizeId,
            "logoPath": this.logoPath,
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
exports.Company = Company;
//# sourceMappingURL=Company.js.map