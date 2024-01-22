import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class ResponseDataString
{
    public constructor(
        private data: string,
        private success: boolean,
        private errorCode: number,
        private requestId: string,
    ) {
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("data", this.data) //string
            .set("success", Boolean(this.success).toString()) //boolean
            .set("errorCode", this.errorCode.toString(10)) //integer
            .set("requestId", this.requestId) //string
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "data": this.data,
            "success": this.success,
            "errorCode": this.errorCode,
            "requestId": this.requestId,
        }
    }

    public toSdkString = () : string => {
        return JSON.stringify(this);
    }

    public toSdkStringFromType<T>(x: T)  {
        return JSON.stringify(x);
    }
}
