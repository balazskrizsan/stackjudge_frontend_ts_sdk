"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdsUser = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class IdsUser {
    sub;
    userName;
    normalizedUserName;
    email;
    emailConfirmed;
    profileUrl;
    constructor(sub, userName, normalizedUserName, email, emailConfirmed, profileUrl) {
        this.sub = sub;
        this.userName = userName;
        this.normalizedUserName = normalizedUserName;
        this.email = email;
        this.emailConfirmed = emailConfirmed;
        this.profileUrl = profileUrl;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("sub", this.sub) //string
            .set("userName", this.userName) //string
            .set("normalizedUserName", this.normalizedUserName) //string
            .set("email", this.email) //string
            .set("emailConfirmed", Boolean(this.emailConfirmed).toString()) //boolean
            .set("profileUrl", this.profileUrl) //string
        ;
    }
    toOpenSdkJson() {
        return {
            "sub": this.sub,
            "userName": this.userName,
            "normalizedUserName": this.normalizedUserName,
            "email": this.email,
            "emailConfirmed": this.emailConfirmed,
            "profileUrl": this.profileUrl,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.IdsUser = IdsUser;
//# sourceMappingURL=IdsUser.js.map