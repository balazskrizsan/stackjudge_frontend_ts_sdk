import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class RecursiveGroupTree
{
    public constructor(
        private recursiveGroup: valueObject.RecursiveGroup,
        private children: valueObject.RecursiveGroupTree[],
    ) {
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("recursiveGroup", this.recursiveGroup.toSdkString()) //#/components/schemas/RecursiveGroup
            .set("children", this.toSdkStringFromType(this.children)) //array
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "recursiveGroup": this.recursiveGroup.toSdkString(),
            "children": this.children,
        }
    }

    public toSdkString = () : string => {
        return JSON.stringify(this);
    }

    public toSdkStringFromType<T>(x: T)  {
        return JSON.stringify(x);
    }
}
