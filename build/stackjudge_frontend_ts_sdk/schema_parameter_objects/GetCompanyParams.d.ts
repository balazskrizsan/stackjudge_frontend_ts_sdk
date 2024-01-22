import { IOpenSdkGetable } from "../../common/intercaes/IOpenSdkGetable";
import { HttpParams } from "@angular/common/http";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class GetCompanyParams implements IOpenSdkGetable {
    private seekId;
    private limit;
    private requestRelationIds;
    private navigationId;
    constructor(seekId: number, limit: number, requestRelationIds: number[], navigationId: number);
    toOpenSdkGet(): {
        seekId: number;
        limit: number;
        requestRelationIds: number[];
        navigationId: number;
    };
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        seekId: number;
        limit: number;
        requestRelationIds: number[];
        navigationId: number;
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
