import { HttpParams } from "@angular/common/http";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class RecursiveGroup {
    private id;
    private name;
    private typeId;
    private companyId;
    private addressId;
    private parentId;
    private depth;
    private path;
    constructor(id: number, name: string, typeId: number, companyId: number, addressId: number, parentId: number, depth: number, path: string);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        id: number;
        name: string;
        typeId: number;
        companyId: number;
        addressId: number;
        parentId: number;
        depth: number;
        path: string;
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
