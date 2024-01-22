import { HttpParams } from "@angular/common/http";
import * as valueObject from "./index";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class ResponseDataCompanySearchServiceResponse {
    private data;
    private success;
    private errorCode;
    private requestId;
    constructor(data: valueObject.CompanySearchServiceResponse, success: boolean, errorCode: number, requestId: string);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        data: string;
        success: boolean;
        errorCode: number;
        requestId: string;
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
