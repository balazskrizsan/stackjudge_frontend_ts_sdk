"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecursiveGroupTree = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class RecursiveGroupTree {
    recursiveGroup;
    children;
    constructor(recursiveGroup, children) {
        this.recursiveGroup = recursiveGroup;
        this.children = children;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("recursiveGroup", this.recursiveGroup.toSdkString()) //#/components/schemas/RecursiveGroup
            .set("children", this.toSdkStringFromType(this.children)) //array
        ;
    }
    toOpenSdkJson() {
        return {
            "recursiveGroup": this.recursiveGroup.toSdkString(),
            "children": this.children,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.RecursiveGroupTree = RecursiveGroupTree;
//# sourceMappingURL=RecursiveGroupTree.js.map