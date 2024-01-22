import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class AddressCreateRequest
{
    public constructor(
        private fullAddress: string,
        private markerLat: number,
        private markerLng: number,
        private manualMarkerLat: number,
        private manualMarkerLng: number,
    ) {
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("fullAddress", this.fullAddress) //string
            .set("markerLat", this.markerLat.toString(10)) //number
            .set("markerLng", this.markerLng.toString(10)) //number
            .set("manualMarkerLat", this.manualMarkerLat.toString(10)) //number
            .set("manualMarkerLng", this.manualMarkerLng.toString(10)) //number
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "fullAddress": this.fullAddress,
            "markerLat": this.markerLat,
            "markerLng": this.markerLng,
            "manualMarkerLat": this.manualMarkerLat,
            "manualMarkerLng": this.manualMarkerLng,
        }
    }

    public toSdkString = () : string => {
        return JSON.stringify(this);
    }

    public toSdkStringFromType<T>(x: T)  {
        return JSON.stringify(x);
    }
}
