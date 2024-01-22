import {HttpParams} from "@angular/common/http";

export interface IOpenSdkPostable
{
    toOpenSdkPost(): HttpParams;
    toAngularHttpParams(): HttpParams;
    toOpenSdkJson(): {};
    toSdkString(): string;
}
