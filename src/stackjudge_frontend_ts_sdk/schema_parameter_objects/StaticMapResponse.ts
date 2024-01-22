import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class StaticMapResponse
{
    public constructor(
        private location: string,
        private mapPositionEnum: string,
    ) {
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("location", this.location) //string
            .set("mapPositionEnum", this.mapPositionEnum) //string
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "location": this.location,
            "mapPositionEnum": this.mapPositionEnum,
        }
    }

    public toSdkString = () : string => {
        return JSON.stringify(this);
    }

    public toSdkStringFromType<T>(x: T)  {
        return JSON.stringify(x);
    }
}
