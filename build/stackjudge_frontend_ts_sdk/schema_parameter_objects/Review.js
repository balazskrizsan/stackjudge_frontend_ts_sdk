"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const http_1 = require("@angular/common/http");
/**
* @Generated("OpenSDK: https://github.com/balazskrizsan/OpenSdk")
*/
class Review {
    id;
    groupId;
    visibility;
    rate;
    review;
    createdAt;
    createdBy;
    constructor(id, groupId, visibility, rate, review, createdAt, createdBy) {
        this.id = id;
        this.groupId = groupId;
        this.visibility = visibility;
        this.rate = rate;
        this.review = review;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
    }
    toOpenSdkHttpParams() {
        // @ts-ignore
        return new http_1.HttpParams()
            .set("id", this.id.toString(10)) //integer
            .set("groupId", this.groupId.toString(10)) //integer
            .set("visibility", this.visibility.toString(10)) //integer
            .set("rate", this.rate.toString(10)) //integer
            .set("review", this.review) //string
            .set("createdAt", this.createdAt) //string
            .set("createdBy", this.createdBy) //string
        ;
    }
    toOpenSdkJson() {
        return {
            "id": this.id,
            "groupId": this.groupId,
            "visibility": this.visibility,
            "rate": this.rate,
            "review": this.review,
            "createdAt": this.createdAt,
            "createdBy": this.createdBy,
        };
    }
    toSdkString = () => {
        return JSON.stringify(this);
    };
    toSdkStringFromType(x) {
        return JSON.stringify(this);
    }
}
exports.Review = Review;
//# sourceMappingURL=Review.js.map