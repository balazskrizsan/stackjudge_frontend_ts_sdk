import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class PaginatorItem
{
    public constructor(
        private typeId: string,
        private pageNumber: string,
        private navigation: string,
        private active: boolean,
    ) {
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("typeId", this.typeId) //string
            .set("pageNumber", this.pageNumber) //string
            .set("navigation", this.navigation) //string
            .set("active", Boolean(this.active).toString()) //boolean
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "typeId": this.typeId,
            "pageNumber": this.pageNumber,
            "navigation": this.navigation,
            "active": this.active,
        }
    }

    public toSdkString = () : string => {
        return JSON.stringify(this);
    }

    public toSdkStringFromType<T>(x: T)  {
        return JSON.stringify(x);
    }
}
