import {IOpenSdkGetable} from "../../common/intercaes/IOpenSdkGetable";
import {IOpenSdkPostable} from "../../common/intercaes/IOpenSdkPostable";
import {User} from "./User";

export class ResponseDataUser
{
    private user: User;
    private success: boolean;
    private errorCode: number;
    private requestId: string;
}
