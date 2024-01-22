import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class Company
{
    public constructor(
        private id: number,
        private name: string,
        private domain: string,
        private companySizeId: number,
        private itSizeId: number,
        private logoPath: string,
        private createdAt: string,
        private createdBy: string,
    ) {
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("id", this.id.toString(10)) //integer
            .set("name", this.name) //string
            .set("domain", this.domain) //string
            .set("companySizeId", this.companySizeId.toString(10)) //integer
            .set("itSizeId", this.itSizeId.toString(10)) //integer
            .set("logoPath", this.logoPath) //string
            .set("createdAt", this.createdAt) //string
            .set("createdBy", this.createdBy) //string
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "id": this.id,
            "name": this.name,
            "domain": this.domain,
            "companySizeId": this.companySizeId,
            "itSizeId": this.itSizeId,
            "logoPath": this.logoPath,
            "createdAt": this.createdAt,
            "createdBy": this.createdBy,
        }
    }

    public toSdkString = () : string => {
        return JSON.stringify(this);
    }

    public toSdkStringFromType<T>(x: T)  {
        return JSON.stringify(x);
    }
}
