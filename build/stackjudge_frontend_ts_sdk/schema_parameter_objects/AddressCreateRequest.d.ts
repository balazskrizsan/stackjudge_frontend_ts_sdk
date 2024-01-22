import { HttpParams } from "@angular/common/http";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class AddressCreateRequest {
    private fullAddress;
    private markerLat;
    private markerLng;
    private manualMarkerLat;
    private manualMarkerLng;
    constructor(fullAddress: string, markerLat: number, markerLng: number, manualMarkerLat: number, manualMarkerLng: number);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        fullAddress: string;
        markerLat: number;
        markerLng: number;
        manualMarkerLat: number;
        manualMarkerLng: number;
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
