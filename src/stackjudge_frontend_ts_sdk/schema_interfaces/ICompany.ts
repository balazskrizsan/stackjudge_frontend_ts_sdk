import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {StdResponse}      from "../../common/entities/StdResponse";
import * as valueObject   from "./../schema_parameter_objects/index";
import {HttpParams}       from "@angular/common/http";
import {Observable}       from "rxjs";

export const API_URL = "/company"; 

/**
 * @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
 */
export interface ICompany
{
    get(getCompanyParams: IOpenSdkGetable): Observable<StdResponse<valueObject.Company[]>>;
    post(postCompany: IOpenSdkPostable): StdResponse<string>;
}
