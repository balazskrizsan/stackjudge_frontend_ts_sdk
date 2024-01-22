import { HttpParams } from "@angular/common/http";
import * as valueObject from "./index";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class CompanySearchServiceResponse {
    private companies;
    private companyGroups;
    private paginator;
    private newSeekId;
    private companyStatistics;
    private companyAddresses;
    private companyAddressMaps;
    private companyReviews;
    private companyOwners;
    private companyUsers;
    constructor(companies: valueObject.Company[], companyGroups: object, paginator: valueObject.PaginatorItem[], newSeekId: number, companyStatistics: object, companyAddresses: object, companyAddressMaps: object, companyReviews: object, companyOwners: object, companyUsers: object);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        companies: valueObject.Company[];
        companyGroups: object;
        paginator: valueObject.PaginatorItem[];
        newSeekId: number;
        companyStatistics: object;
        companyAddresses: object;
        companyAddressMaps: object;
        companyReviews: object;
        companyOwners: object;
        companyUsers: object;
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
