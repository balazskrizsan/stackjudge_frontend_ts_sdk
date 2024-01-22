import {IOpenSdkGetable}  from "../../common/interfaces/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/interfaces/IOpenSdkPostable";
import {HttpParams}       from "@angular/common/http";
import * as valueObject from "./index";

/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
export class CompanySearchServiceResponse
{
    public constructor(
        private companies: valueObject.Company[],
        private companyGroups: valueObject.CompanyGroupsMap[],
        private paginator: valueObject.PaginatorItem[],
        private newSeekId: number,
        private companyStatistics: valueObject.CompanyStatisticsMap[],
        private companyAddresses: valueObject.CompanyAddressesMap[],
        private companyAddressMaps: valueObject.companyAddressMapsMap[],
        private companyReviews: valueObject.CompanyReviewsMap[],
        private companyOwners: valueObject.CompanyOwnersMap[],
        private companyUsers: valueObject.CompanyUsersMap[],
    ) {
    }

    public toAngularHttpParams(): HttpParams
    {
        // @ts-ignore
        return new HttpParams()
            .set("companies", this.toSdkStringFromType(this.companies)) //array
            .set("companyGroups", this.toSdkStringFromType(this.companyGroups)) //array
            .set("paginator", this.toSdkStringFromType(this.paginator)) //array
            .set("newSeekId", this.newSeekId.toString(10)) //integer
            .set("companyStatistics", this.toSdkStringFromType(this.companyStatistics)) //array
            .set("companyAddresses", this.toSdkStringFromType(this.companyAddresses)) //array
            .set("companyAddressMaps", this.toSdkStringFromType(this.companyAddressMaps)) //array
            .set("companyReviews", this.toSdkStringFromType(this.companyReviews)) //array
            .set("companyOwners", this.toSdkStringFromType(this.companyOwners)) //array
            .set("companyUsers", this.toSdkStringFromType(this.companyUsers)) //array
        ;
    }

    public toOpenSdkJson()
    {
        return {
            "companies": this.companies,
            "companyGroups": this.companyGroups,
            "paginator": this.paginator,
            "newSeekId": this.newSeekId,
            "companyStatistics": this.companyStatistics,
            "companyAddresses": this.companyAddresses,
            "companyAddressMaps": this.companyAddressMaps,
            "companyReviews": this.companyReviews,
            "companyOwners": this.companyOwners,
            "companyUsers": this.companyUsers,
        }
    }

    public toSdkString = () : string => {
        return JSON.stringify(this);
    }

    public toSdkStringFromType<T>(x: T)  {
        return JSON.stringify(x);
    }
}
