"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var common_1 = require("../common");
var salesrouter_1 = require("./salesrouter");
var Routes = /** @class */ (function () {
    function Routes() {
        this.express = express();
        this.logger = new common_1.Logger();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    Routes.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    Routes.prototype.routes = function () {
        this.express.use('/sales', salesrouter_1.salesrouter);
        this.logger.info("Funciona API");
    };
    return Routes;
}());
exports["default"] = new Routes().express;
