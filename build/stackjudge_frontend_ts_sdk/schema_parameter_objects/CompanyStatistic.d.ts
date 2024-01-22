import { HttpParams } from "@angular/common/http";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class CompanyStatistic {
    private companyId;
    private stackCount;
    private teamsCount;
    private reviewCount;
    private technologiesCount;
    constructor(companyId: number, stackCount: number, teamsCount: number, reviewCount: number, technologiesCount: number);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        companyId: number;
        stackCount: number;
        teamsCount: number;
        reviewCount: number;
        technologiesCount: number;
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
