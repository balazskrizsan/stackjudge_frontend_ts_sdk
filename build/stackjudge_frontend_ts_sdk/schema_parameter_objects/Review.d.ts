import { HttpParams } from "@angular/common/http";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class Review {
    private id;
    private groupId;
    private visibility;
    private rate;
    private review;
    private createdAt;
    private createdBy;
    constructor(id: number, groupId: number, visibility: number, rate: number, review: string, createdAt: string, createdBy: string);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        id: number;
        groupId: number;
        visibility: number;
        rate: number;
        review: string;
        createdAt: string;
        createdBy: string;
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
