import { HttpParams } from "@angular/common/http";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class CompanyOwners {
    private companyId;
    private owners;
    constructor(companyId: number, owners: string[]);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        companyId: number;
        owners: string[];
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
