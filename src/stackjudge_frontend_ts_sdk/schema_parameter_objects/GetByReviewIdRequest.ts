import {IOpenSdkGetable} from "../../common/intercaes/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/intercaes/IOpenSdkPostable";
import {User} from "./User";

export class GetByReviewIdRequest implements IOpenSdkGetable
{
    private reviewId: number;

    public toOpenSdkGet()
    {
        return {
            "reviewId": this.reviewId,
        }
    }
}
