import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class IdsUser
{
    public constructor(
        private sub: string,
        private userName: string,
        private normalizedUserName: string,
        private email: string,
        private emailConfirmed: boolean,
        private profileUrl: string,
    ) {
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("sub", this.sub) //string
            .set("userName", this.userName) //string
            .set("normalizedUserName", this.normalizedUserName) //string
            .set("email", this.email) //string
            .set("emailConfirmed", Boolean(this.emailConfirmed).toString()) //boolean
            .set("profileUrl", this.profileUrl) //string
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "sub": this.sub,
            "userName": this.userName,
            "normalizedUserName": this.normalizedUserName,
            "email": this.email,
            "emailConfirmed": this.emailConfirmed,
            "profileUrl": this.profileUrl,
        }
    }

    public toSdkString = () : string => {
        return JSON.stringify(this);
    }

    public toSdkStringFromType<T>(x: T)  {
        return JSON.stringify(x);
    }
}
