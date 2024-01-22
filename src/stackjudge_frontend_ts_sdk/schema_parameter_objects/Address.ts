import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class Address
{
    public constructor(
        private id: number,
        private companyId: number,
        private fullAddress: string,
        private markerLat: number,
        private markerLng: number,
        private manualMarkerLat: number,
        private manualMarkerLng: number,
        private createdAt: string,
        private createdBy: string,
    ) {
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("id", this.id.toString(10)) //integer
            .set("companyId", this.companyId.toString(10)) //integer
            .set("fullAddress", this.fullAddress) //string
            .set("markerLat", this.markerLat.toString(10)) //number
            .set("markerLng", this.markerLng.toString(10)) //number
            .set("manualMarkerLat", this.manualMarkerLat.toString(10)) //number
            .set("manualMarkerLng", this.manualMarkerLng.toString(10)) //number
            .set("createdAt", this.createdAt) //string
            .set("createdBy", this.createdBy) //string
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "id": this.id,
            "companyId": this.companyId,
            "fullAddress": this.fullAddress,
            "markerLat": this.markerLat,
            "markerLng": this.markerLng,
            "manualMarkerLat": this.manualMarkerLat,
            "manualMarkerLng": this.manualMarkerLng,
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
