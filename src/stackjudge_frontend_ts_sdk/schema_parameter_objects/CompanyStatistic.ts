import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class CompanyStatistic
{
    public constructor(
        private companyId: number,
        private stackCount: number,
        private teamsCount: number,
        private reviewCount: number,
        private technologiesCount: number,
    ) {
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("companyId", this.companyId.toString(10)) //integer
            .set("stackCount", this.stackCount.toString(10)) //integer
            .set("teamsCount", this.teamsCount.toString(10)) //integer
            .set("reviewCount", this.reviewCount.toString(10)) //integer
            .set("technologiesCount", this.technologiesCount.toString(10)) //integer
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "companyId": this.companyId,
            "stackCount": this.stackCount,
            "teamsCount": this.teamsCount,
            "reviewCount": this.reviewCount,
            "technologiesCount": this.technologiesCount,
        }
    }

    public toSdkString = () : string => {
        return JSON.stringify(this);
    }

    public toSdkStringFromType<T>(x: T)  {
        return JSON.stringify(x);
    }
}
