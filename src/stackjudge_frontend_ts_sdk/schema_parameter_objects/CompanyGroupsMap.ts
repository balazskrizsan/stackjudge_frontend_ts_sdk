import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class CompanyGroupsMap
{
    public constructor(
        private key: string,
        private value: valueObject.RecursiveGroupTree[],
    ) {
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("key", this.key) //string
            .set("value", this.toSdkStringFromType(this.value)) //array
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "key": this.key,
            "value": this.value,
        }
    }

    public toSdkString = () : string => {
        return JSON.stringify(this);
    }

    public toSdkStringFromType<T>(x: T)  {
        return JSON.stringify(x);
    }
}
