"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecursiveGroup = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class RecursiveGroup {
    id;
    name;
    typeId;
    companyId;
    addressId;
    parentId;
    depth;
    path;
    constructor(id, name, typeId, companyId, addressId, parentId, depth, path) {
        this.id = id;
        this.name = name;
        this.typeId = typeId;
        this.companyId = companyId;
        this.addressId = addressId;
        this.parentId = parentId;
        this.depth = depth;
        this.path = path;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
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
    toOpenSdkJson() {
        return {
            "id": this.id,
            "name": this.name,
            "typeId": this.typeId,
            "companyId": this.companyId,
            "addressId": this.addressId,
            "parentId": this.parentId,
            "depth": this.depth,
            "path": this.path,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.RecursiveGroup = RecursiveGroup;
//# sourceMappingURL=RecursiveGroup.js.map