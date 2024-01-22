import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class Review
{
    public constructor(
        private id: number,
        private groupId: number,
        private visibility: number,
        private rate: number,
        private review: string,
        private createdAt: string,
        private createdBy: string,
    ) {
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("id", this.id.toString(10)) //integer
            .set("groupId", this.groupId.toString(10)) //integer
            .set("visibility", this.visibility.toString(10)) //integer
            .set("rate", this.rate.toString(10)) //integer
            .set("review", this.review) //string
            .set("createdAt", this.createdAt) //string
            .set("createdBy", this.createdBy) //string
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "id": this.id,
            "groupId": this.groupId,
            "visibility": this.visibility,
            "rate": this.rate,
            "review": this.review,
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
