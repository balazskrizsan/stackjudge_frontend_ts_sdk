"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyStatistic = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class CompanyStatistic {
    companyId;
    stackCount;
    teamsCount;
    reviewCount;
    technologiesCount;
    constructor(companyId, stackCount, teamsCount, reviewCount, technologiesCount) {
        this.companyId = companyId;
        this.stackCount = stackCount;
        this.teamsCount = teamsCount;
        this.reviewCount = reviewCount;
        this.technologiesCount = technologiesCount;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("companyId", this.companyId.toString(10)) //integer
            .set("stackCount", this.stackCount.toString(10)) //integer
            .set("teamsCount", this.teamsCount.toString(10)) //integer
            .set("reviewCount", this.reviewCount.toString(10)) //integer
            .set("technologiesCount", this.technologiesCount.toString(10)) //integer
        ;
    }
    toOpenSdkJson() {
        return {
            "companyId": this.companyId,
            "stackCount": this.stackCount,
            "teamsCount": this.teamsCount,
            "reviewCount": this.reviewCount,
            "technologiesCount": this.technologiesCount,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.CompanyStatistic = CompanyStatistic;
//# sourceMappingURL=CompanyStatistic.js.map