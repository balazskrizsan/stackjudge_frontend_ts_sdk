import { HttpParams } from "@angular/common/http";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class Company {
    private id;
    private name;
    private domain;
    private companySizeId;
    private itSizeId;
    private logoPath;
    private createdAt;
    private createdBy;
    constructor(id: number, name: string, domain: string, companySizeId: number, itSizeId: number, logoPath: string, createdAt: string, createdBy: string);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        id: number;
        name: string;
        domain: string;
        companySizeId: number;
        itSizeId: number;
        logoPath: string;
        createdAt: string;
        createdBy: string;
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
