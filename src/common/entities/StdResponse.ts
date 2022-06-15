export class StdResponse<T> {
    data?: T;
    errorData?: any;
    success: boolean;
    errorCode: number;
    statusCode: number;
}
