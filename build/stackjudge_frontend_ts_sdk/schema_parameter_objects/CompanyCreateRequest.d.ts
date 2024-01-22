import { HttpParams } from "@angular/common/http";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class CompanyCreateRequest {
    private name;
    private domain;
    private companySizeId;
    private itSizeId;
    constructor(name: string, domain: string, companySizeId: number, itSizeId: number);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        name: string;
        domain: string;
        companySizeId: number;
        itSizeId: number;
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
