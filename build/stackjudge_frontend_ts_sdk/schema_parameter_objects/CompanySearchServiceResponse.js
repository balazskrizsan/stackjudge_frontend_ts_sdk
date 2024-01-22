"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanySearchServiceResponse = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class CompanySearchServiceResponse {
    companies;
    companyGroups;
    paginator;
    newSeekId;
    companyStatistics;
    companyAddresses;
    companyAddressMaps;
    companyReviews;
    companyOwners;
    companyUsers;
    constructor(companies, companyGroups, paginator, newSeekId, companyStatistics, companyAddresses, companyAddressMaps, companyReviews, companyOwners, companyUsers) {
        this.companies = companies;
        this.companyGroups = companyGroups;
        this.paginator = paginator;
        this.newSeekId = newSeekId;
        this.companyStatistics = companyStatistics;
        this.companyAddresses = companyAddresses;
        this.companyAddressMaps = companyAddressMaps;
        this.companyReviews = companyReviews;
        this.companyOwners = companyOwners;
        this.companyUsers = companyUsers;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("companies", this.toSdkStringFromType(this.companies)) //array
            .set("companyGroups", this.companyGroups.toSdkString()) //object
            .set("paginator", this.toSdkStringFromType(this.paginator)) //array
            .set("newSeekId", this.newSeekId.toString(10)) //integer
            .set("companyStatistics", this.companyStatistics.toSdkString()) //object
            .set("companyAddresses", this.companyAddresses.toSdkString()) //object
            .set("companyAddressMaps", this.companyAddressMaps.toSdkString()) //object
            .set("companyReviews", this.companyReviews.toSdkString()) //object
            .set("companyOwners", this.companyOwners.toSdkString()) //object
            .set("companyUsers", this.companyUsers.toSdkString()) //object
        ;
    }
    toOpenSdkJson() {
        return {
            "companies": this.companies,
            "companyGroups": this.companyGroups,
            "paginator": this.paginator,
            "newSeekId": this.newSeekId,
            "companyStatistics": this.companyStatistics,
            "companyAddresses": this.companyAddresses,
            "companyAddressMaps": this.companyAddressMaps,
            "companyReviews": this.companyReviews,
            "companyOwners": this.companyOwners,
            "companyUsers": this.companyUsers,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.CompanySearchServiceResponse = CompanySearchServiceResponse;
//# sourceMappingURL=CompanySearchServiceResponse.js.map