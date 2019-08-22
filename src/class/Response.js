class Response {
    constructor() {
        this.status = 200;
        this.msg = 'success';
        this.success = true;
        this.payload = null;
    }

    /**
     *  Set the response status here 200 - 500
     * @param {*} status
     */
    setStatus(status) {
        this.status = status;
        return this;
    }

    /**
     * Set msg
     * Ex. Internal server error
     * @param {*} msg
     */
    setMsg(msg) {
        this.msg = msg;
        return this;
    }

    /**
     *  Status make false when fail
     * @param {Boolean} success
     */
    setSuccess(success) {
        this.success = success;
        return this;
    }

    /**
     * Result of the request if success
     * @param {*} payload
     */
    setPayload(payload) {
        this.payload = payload;
        return this;
    }

    /**
     * Return the data as a simple object
     */
    toJson() {
        return {
            status: this.status,
            msg: this.msg,
            success: this.success,
            payload: this.payload,
        };
    }
}

module.exports = Response;
