export enum httpStatusCode {
    ERROR = 404 ,
    SUCCESS = 200,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    INTERNAL_SERVER_ERROR = 500,
    BAD_REQUEST = 400,
}
export enum httpMessage {
    ERROR = 'Server internal error',
    SUCCESS = 'Server responded successfully',
    UNAUTHORIZED = 'Unauthorized',
    FORBIDDEN = 'Forbidden',
    INTERNAL_SERVER_ERROR = 'Internal Server Error',
    BAD_REQUEST = 'Bad Request',
}