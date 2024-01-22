import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class GetCompanyParams implements IOpenSdkGetable
{
    public constructor(
        private seekId: number,
        private limit: number,
        private requestRelationIds: number[],
        private navigationId: number,
    ) {
    }

    public toOpenSdkGet(): HttpParams
    {
        return this.toAngularHttpParams();
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("seekId", this.seekId.toString(10)) //integer
            .set("limit", this.limit.toString(10)) //integer
            .set("requestRelationIds", this.toSdkStringFromType(this.requestRelationIds)) //array
            .set("navigationId", this.navigationId.toString(10)) //integer
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "seekId": this.seekId,
            "limit": this.limit,
            "requestRelationIds": this.requestRelationIds,
            "navigationId": this.navigationId,
        }
    }

    public toSdkString = () : string => {
        return JSON.stringify(this);
    }

    public toSdkStringFromType<T>(x: T)  {
        return JSON.stringify(x);
    }
}
