import { HttpParams } from "@angular/common/http";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class GetRequest {
    private companyId;
    private requestRelationIds;
    constructor(companyId: number, requestRelationIds: number[]);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        companyId: number;
        requestRelationIds: number[];
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
