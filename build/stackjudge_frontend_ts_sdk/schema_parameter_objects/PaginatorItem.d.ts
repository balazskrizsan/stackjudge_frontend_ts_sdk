import { HttpParams } from "@angular/common/http";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class PaginatorItem {
    private typeId;
    private pageNumber;
    private navigation;
    private active;
    constructor(typeId: string, pageNumber: string, navigation: string, active: boolean);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        typeId: string;
        pageNumber: string;
        navigation: string;
        active: boolean;
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
