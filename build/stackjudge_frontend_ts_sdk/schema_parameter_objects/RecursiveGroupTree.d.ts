import { HttpParams } from "@angular/common/http";
import * as valueObject from "./index";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class RecursiveGroupTree {
    private recursiveGroup;
    private children;
    constructor(recursiveGroup: valueObject.RecursiveGroup, children: valueObject.RecursiveGroupTree[]);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        recursiveGroup: string;
        children: valueObject.RecursiveGroupTree[];
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
