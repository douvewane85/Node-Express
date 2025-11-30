class ResponseFormat {
    constructor(statusCode, data, message) {
        this.statut = statusCode < 400;
        this.statutCode = statusCode;
        this.data = data;
        this.message = message;
    }
}

export default  ResponseFormat;