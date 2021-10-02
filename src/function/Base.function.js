const log = require('../../logger/logger');

class BaseFunction {
    constructor() {
        this.logger = log(`${this.constructor.name} name`);
    }
}

module.export = BaseFunction;
