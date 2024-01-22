import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class PostCompany implements IOpenSdkPostable
{
    public constructor(
        private company: valueObject.CompanyCreateRequest,
        private address: valueObject.AddressCreateRequest,
        private companyLogo: string,
    ) {
    }

    public toOpenSdkPost(): HttpParams
    {
        return this.toAngularHttpParams();
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("company", this.company.toSdkString()) //#/components/schemas/CompanyCreateRequest
            .set("address", this.address.toSdkString()) //#/components/schemas/AddressCreateRequest
            .set("companyLogo", this.companyLogo) //binary
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "company": this.company.toSdkString(),
            "address": this.address.toSdkString(),
            "companyLogo": this.companyLogo,
        }
    }

    public toSdkString = () : string => {
        return JSON.stringify(this);
    }

    public toSdkStringFromType<T>(x: T)  {
        return JSON.stringify(x);
    }
}
