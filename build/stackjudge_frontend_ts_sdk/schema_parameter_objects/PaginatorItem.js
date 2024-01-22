"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatorItem = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class PaginatorItem {
    typeId;
    pageNumber;
    navigation;
    active;
    constructor(typeId, pageNumber, navigation, active) {
        this.typeId = typeId;
        this.pageNumber = pageNumber;
        this.navigation = navigation;
        this.active = active;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("typeId", this.typeId) //string
            .set("pageNumber", this.pageNumber) //string
            .set("navigation", this.navigation) //string
            .set("active", Boolean(this.active).toString()) //boolean
        ;
    }
    toOpenSdkJson() {
        return {
            "typeId": this.typeId,
            "pageNumber": this.pageNumber,
            "navigation": this.navigation,
            "active": this.active,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.PaginatorItem = PaginatorItem;
//# sourceMappingURL=PaginatorItem.js.map