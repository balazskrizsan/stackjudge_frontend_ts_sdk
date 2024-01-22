import { HttpParams } from "@angular/common/http";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class ResponseDataString {
    private data;
    private success;
    private errorCode;
    private requestId;
    constructor(data: string, success: boolean, errorCode: number, requestId: string);
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
