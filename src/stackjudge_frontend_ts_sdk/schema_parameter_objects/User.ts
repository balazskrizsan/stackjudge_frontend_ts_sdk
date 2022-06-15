import {IOpenSdkGetable} from "../../common/intercaes/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/intercaes/IOpenSdkPostable";

export class User
{
    private id: number;
    private isEmailUser: boolean;
    private isFacebookUser: boolean;
    private profilePictureUrl: string;
    private username: string;
    private facebookId: number;
}
