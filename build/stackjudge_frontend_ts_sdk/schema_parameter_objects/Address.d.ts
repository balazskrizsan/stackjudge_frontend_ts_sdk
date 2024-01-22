import { HttpParams } from "@angular/common/http";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class Address {
    private id;
    private companyId;
    private fullAddress;
    private markerLat;
    private markerLng;
    private manualMarkerLat;
    private manualMarkerLng;
    private createdAt;
    private createdBy;
    constructor(id: number, companyId: number, fullAddress: string, markerLat: number, markerLng: number, manualMarkerLat: number, manualMarkerLng: number, createdAt: string, createdBy: string);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        id: number;
        companyId: number;
        fullAddress: string;
        markerLat: number;
        markerLng: number;
        manualMarkerLat: number;
        manualMarkerLng: number;
        createdAt: string;
        createdBy: string;
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
