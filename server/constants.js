const constants = {
    // HTTP Status Codes
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,

    // Custom Error Codes
    VALIDATION_ERROR: 400,
    SERVER_ERROR: 500,

    // Custom Application-specific Constants
    MAX_FILE_SIZE_MB: 10,
    DEFAULT_PAGE_SIZE: 20,
    DEFAULT_TIMEOUT_MS: 5000
};



module.exports = constants;