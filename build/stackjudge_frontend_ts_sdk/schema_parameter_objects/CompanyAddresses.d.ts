import { HttpParams } from "@angular/common/http";
import * as valueObject from "./index";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class CompanyAddresses {
    private companyId;
    private addresses;
    constructor(companyId: number, addresses: valueObject.Address[]);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        companyId: number;
        addresses: valueObject.Address[];
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
