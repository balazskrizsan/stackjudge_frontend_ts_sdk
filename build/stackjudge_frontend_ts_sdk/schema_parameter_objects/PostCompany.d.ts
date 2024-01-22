import { IOpenSdkPostable } from "../../common/intercaes/IOpenSdkPostable";
import { HttpParams } from "@angular/common/http";
import * as valueObject from "./index";
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export declare class PostCompany implements IOpenSdkPostable {
    private company;
    private address;
    private companyLogo;
    constructor(company: valueObject.CompanyCreateRequest, address: valueObject.AddressCreateRequest, companyLogo: string);
    toOpenSdkPost(): {
        company: string;
        address: string;
        companyLogo: string;
    };
    toOpenSdkHttpParams(): HttpParams;
    toOpenSdkJson(): {
        company: string;
        address: string;
        companyLogo: string;
    };
    toSdkString: () => string;
    toSdkStringFromType<T>(x: T): string;
}
