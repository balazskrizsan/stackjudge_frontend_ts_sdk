import { HttpParams } from "@angular/common/http";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class IdsUser {
    private sub;
    private userName;
    private normalizedUserName;
    private email;
    private emailConfirmed;
    private profileUrl;
    constructor(sub: string, userName: string, normalizedUserName: string, email: string, emailConfirmed: boolean, profileUrl: string);
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        sub: string;
        userName: string;
        normalizedUserName: string;
        email: string;
        emailConfirmed: boolean;
        profileUrl: string;
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
