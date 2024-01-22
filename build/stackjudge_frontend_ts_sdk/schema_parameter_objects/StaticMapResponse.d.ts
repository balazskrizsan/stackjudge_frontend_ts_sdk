import { HttpParams } from "@angular/common/http";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class StaticMapResponse {
    private location;
    private mapPositionEnum;
    constructor(location: string, mapPositionEnum: string);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        location: string;
        mapPositionEnum: string;
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
