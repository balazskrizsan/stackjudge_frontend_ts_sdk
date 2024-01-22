import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class CompanyCreateRequest
{
    public constructor(
        private name: string,
        private domain: string,
        private companySizeId: number,
        private itSizeId: number,
    ) {
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("name", this.name) //string
            .set("domain", this.domain) //string
            .set("companySizeId", this.companySizeId.toString(10)) //integer
            .set("itSizeId", this.itSizeId.toString(10)) //integer
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "name": this.name,
            "domain": this.domain,
            "companySizeId": this.companySizeId,
            "itSizeId": this.itSizeId,
        }
    }

    public toSdkString = () : string => {
        return JSON.stringify(this);
    }

    public toSdkStringFromType<T>(x: T)  {
        return JSON.stringify(x);
    }
}
