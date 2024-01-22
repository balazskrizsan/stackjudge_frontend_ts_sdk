import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class CompanyOwners
{
    public constructor(
        private companyId: number,
        private owners: string[],
    ) {
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("companyId", this.companyId.toString(10)) //integer
            .set("owners", this.toSdkStringFromType(this.owners)) //array
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "companyId": this.companyId,
            "owners": this.owners,
        }
    }

    public toSdkString = () : string => {
        return JSON.stringify(this);
    }

    public toSdkStringFromType<T>(x: T)  {
        return JSON.stringify(x);
    }
}
