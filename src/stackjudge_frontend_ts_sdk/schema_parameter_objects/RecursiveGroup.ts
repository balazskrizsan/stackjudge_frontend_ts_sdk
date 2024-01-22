import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class RecursiveGroup
{
    public constructor(
        private id: number,
        private name: string,
        private typeId: number,
        private companyId: number,
        private addressId: number,
        private parentId: number,
        private depth: number,
        private path: string,
    ) {
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("id", this.id.toString(10)) //integer
            .set("name", this.name) //string
            .set("typeId", this.typeId.toString(10)) //integer
            .set("companyId", this.companyId.toString(10)) //integer
            .set("addressId", this.addressId.toString(10)) //integer
            .set("parentId", this.parentId.toString(10)) //integer
            .set("depth", this.depth.toString(10)) //integer
            .set("path", this.path) //string
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "id": this.id,
            "name": this.name,
            "typeId": this.typeId,
            "companyId": this.companyId,
            "addressId": this.addressId,
            "parentId": this.parentId,
            "depth": this.depth,
            "path": this.path,
        }
    }

    public toSdkString = () : string => {
        return JSON.stringify(this);
    }

    public toSdkStringFromType<T>(x: T)  {
        return JSON.stringify(x);
    }
}
