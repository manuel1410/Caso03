"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.salesController = void 0;
var sales_data_1 = require("../repositories/sales_data");
var common_1 = require("../common");
var Item = require("../models/products");
var User = require("../models/users");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var salesController = /** @class */ (function () {
    function salesController() {
        this.log = new common_1.Logger();
        try {
        }
        catch (e) {
            this.log.error(e);
        }
    }
    salesController.getInstance = function () {
        if (!this.instance) {
            this.instance = new salesController();
        }
        return this.instance;
    };
    salesController.prototype.usersfind = function () {
        var salesdb = new sales_data_1.sales_data();
        return salesdb.Usersfind();
    };
    salesController.prototype.usersfindbyid = function (json) {
        var salesdb = new sales_data_1.sales_data();
        return salesdb.UsersfindByid(json);
    };
    salesController.prototype.itemsfindall = function () {
        var salesdb = new sales_data_1.sales_data();
        return salesdb.ItemsfindAll();
    };
    salesController.prototype.itemsfind = function () {
        var salesdb = new sales_data_1.sales_data();
        return salesdb.Itemsfind();
    };
    salesController.prototype.itemsfindbyid = function (req) {
        var salesdb = new sales_data_1.sales_data();
        return salesdb.ItemsfindByid(req);
    };
    salesController.prototype.itemsfindsold = function () {
        var salesdb = new sales_data_1.sales_data();
        return salesdb.ItemsfindSold();
    };
    salesController.prototype.itemsfinddates = function (req) {
        var salesdb = new sales_data_1.sales_data();
        return salesdb.ItemsfindDates(req);
    };
    salesController.prototype.itemsfindrangeprices = function (req) {
        var salesdb = new sales_data_1.sales_data();
        return salesdb.ItemsfindRangeprices(req);
    };
    salesController.prototype.itemsfindrangeyears = function (req) {
        var salesdb = new sales_data_1.sales_data();
        return salesdb.ItemsfindRangeyears(req);
    };
    salesController.prototype.userscreate = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var json, password;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        json = req;
                        password = json.password;
                        return [4 /*yield*/, bcrypt.genSalt(saltRounds, function (err, salt) {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    bcrypt.hash(password, salt, function (err, hash) {
                                        if (err) {
                                            console.log(err);
                                        }
                                        else {
                                            var hashedpassword = hash;
                                            json.password = hashedpassword;
                                            var salesdb = new sales_data_1.sales_data();
                                            return salesdb.Userscreate(json);
                                        }
                                    });
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    salesController.prototype.itemscreate = function (req) {
        var json = req;
        var initdateString = json.creationDate;
        var initdate_aux = new Date(initdateString);
        var initdateUTC = initdate_aux.setTime(initdate_aux.getTime() + (6 * 60 * 60 * 1000));
        var initdate = new Date(initdateUTC);
        var lastdateString = json.maxDate;
        var lastdate_aux = new Date(lastdateString);
        var lastdateUTC = lastdate_aux.setTime(lastdate_aux.getTime() + (6 * 60 * 60 * 1000));
        var lastdate = new Date(lastdateUTC);
        var prettyinitdate = initdate.toLocaleDateString();
        var initdatehour = initdate.toLocaleTimeString();
        var prettylastdate = lastdate.toLocaleDateString();
        var lastdatehour = lastdate.toLocaleTimeString();
        json.lastPrice = json.initialPrice;
        json.creationDatepretty = prettyinitdate;
        json.creationDateHour = initdatehour;
        json.maxDatepretty = prettylastdate;
        json.maxDateHour = lastdatehour;
        var salesdb = new sales_data_1.sales_data();
        return salesdb.Itemscreate(json);
    };
    salesController.prototype.itemsdelete = function (req) {
        var salesdb = new sales_data_1.sales_data();
        return salesdb.Itemsdelete(req);
    };
    salesController.prototype.Itemscheckdate = function (req) {
        var date = new Date(req.date);
        var json = req;
        json.date = date;
        var salesdb = new sales_data_1.sales_data();
        return salesdb.ItemsCheckdate(json);
    };
    salesController.prototype.itemsstatusupdate = function (req) {
        var salesdb = new sales_data_1.sales_data();
        return salesdb.ItemsstatusUpdate(req);
    };
    salesController.prototype.itemsdeletedupdate = function (req) {
        var salesdb = new sales_data_1.sales_data();
        return salesdb.ItemsdeletedUpdate(req);
    };
    salesController.prototype.itemspushprice = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var itemid, items, item, ult, salesdb, salesdb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemid = req.itemid;
                        return [4 /*yield*/, Item.find({ _id: itemid })];
                    case 1:
                        items = _a.sent();
                        item = items[0];
                        ult = item.offers.length - 1;
                        if (item.offers.length !== 0) {
                            if ((req.offer.amount > item.offers[ult].amount) && (item.sold === false)) {
                                salesdb = new sales_data_1.sales_data();
                                return [2 /*return*/, salesdb.ItemspushPrice(req)];
                            }
                        }
                        else if (item.offers.length === 0) {
                            if (item.sold === false) {
                                if (req.offer.amount >= item.initialPrice) {
                                    salesdb = new sales_data_1.sales_data();
                                    return [2 /*return*/, salesdb.ItemspushPrice(req)];
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return salesController;
}());
exports.salesController = salesController;
