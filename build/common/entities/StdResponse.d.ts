export declare class StdResponse<T> {
    data?: T;
    errorData?: any;
    success: boolean;
    errorCode: number;
    statusCode: number;
}
