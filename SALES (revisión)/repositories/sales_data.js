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
exports.sales_data = void 0;
require('../connection');
var Item = require("../models/products");
var User = require("../models/users");
var sales_data = /** @class */ (function () {
    function sales_data() {
    }
    //Metodo para buscar todos los usuarios NO borrados
    sales_data.prototype.Usersfind = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.find({ deleted: false })];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        });
    };
    //Metodo para buscar un usuario por id
    sales_data.prototype.UsersfindByid = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.find({ _id: json._id })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    //Metodo para buscar todos los items
    sales_data.prototype.ItemsfindAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Item.find()];
                    case 1:
                        items = _a.sent();
                        return [2 /*return*/, items];
                }
            });
        });
    };
    //Metodo para buscar todos los items NO borrados
    sales_data.prototype.Itemsfind = function () {
        return __awaiter(this, void 0, void 0, function () {
            var items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Item.find({ deleted: false, sold: false })];
                    case 1:
                        items = _a.sent();
                        return [2 /*return*/, items];
                }
            });
        });
    };
    //Metodo para buscar por id
    sales_data.prototype.ItemsfindByid = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Item.find({ _id: json._id })];
                    case 1:
                        items = _a.sent();
                        return [2 /*return*/, items];
                }
            });
        });
    };
    //Metodo para buscar todos los items NO borrados y NO vendidos
    sales_data.prototype.ItemsfindSold = function () {
        return __awaiter(this, void 0, void 0, function () {
            var items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Item.find({ sold: true, deleted: false })];
                    case 1:
                        items = _a.sent();
                        return [2 /*return*/, items];
                }
            });
        });
    };
    //Metodo para buscar todos los items NO borrados y no vendidos por fechas
    sales_data.prototype.ItemsfindDates = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Item.find({ deleted: false, sold: false, maxDate: { $lte: json.date } })];
                    case 1:
                        items = _a.sent();
                        return [2 /*return*/, items];
                }
            });
        });
    };
    sales_data.prototype.ItemsfindRangeprices = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Item.find({ deleted: false, sold: false, lastPrice: { $gte: json.minprice, $lte: json.maxprice } })];
                    case 1:
                        items = _a.sent();
                        return [2 /*return*/, items];
                }
            });
        });
    };
    sales_data.prototype.ItemsfindRangeyears = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Item.find({ deleted: false, sold: false, year: { $gte: json.minyear, $lte: json.maxyear } })];
                    case 1:
                        items = _a.sent();
                        return [2 /*return*/, items];
                }
            });
        });
    };
    //metodo para insertar un usuario (el parametro es el JSON del objeto)
    sales_data.prototype.Userscreate = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var user, inserteduser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = new User(json);
                        return [4 /*yield*/, user.save()];
                    case 1:
                        inserteduser = _a.sent();
                        return [2 /*return*/, inserteduser];
                }
            });
        });
    };
    //metodo para insertar un item (el parametro es el JSON del objeto)
    sales_data.prototype.Itemscreate = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var item, inserteditem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = new Item(json);
                        return [4 /*yield*/, item.save()];
                    case 1:
                        inserteditem = _a.sent();
                        return [2 /*return*/, inserteditem];
                }
            });
        });
    };
    //metodo que actualiza los productos de un usuario cuando se inserta un item nuevo (se llama siempre despues de Itemscreate(json: any))
    /*
    public async ItemsregisterOwner(json: any){

        const id = json.owner.ownerId;
        
        const updateduser = await User.update({ _id: id }, { $push: { products: json } });
        return updateduser;
    }
    */
    //metodo para buscar y eliminar un item (el parametro es el JSON del objeto)
    sales_data.prototype.Itemsdelete = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var itemid, updateditem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemid = json._id;
                        return [4 /*yield*/, Item.findByIdAndUpdate({ _id: itemid }, { "deleted": true })];
                    case 1:
                        updateditem = _a.sent();
                        return [2 /*return*/, updateditem];
                }
            });
        });
    };
    //Metodo para revisar la fecha y actualizar el estado si se venció la fecha
    sales_data.prototype.ItemsCheckdate = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var itemid, item, updateditem, updateditem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemid = json._id;
                        return [4 /*yield*/, Item.findOne({ _id: itemid })];
                    case 1:
                        item = _a.sent();
                        if (!(json.date > item.maxDate)) return [3 /*break*/, 5];
                        if (!(item.offers.length !== 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Item.findByIdAndUpdate({ _id: item._id }, { "sold": true })];
                    case 2:
                        updateditem = _a.sent();
                        return [2 /*return*/, updateditem];
                    case 3:
                        if (!(item.offers.length === 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, Item.findByIdAndUpdate({ _id: item._id }, { "deleted": true })];
                    case 4:
                        updateditem = _a.sent();
                        return [2 /*return*/, updateditem];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //metodo para buscar y cambiar el estado de un item (el parametro es el ID)
    sales_data.prototype.ItemsstatusUpdate = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var itemid, item, updateditem, updateditem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemid = json._id;
                        return [4 /*yield*/, Item.findOne({ _id: itemid })];
                    case 1:
                        item = _a.sent();
                        if (!(item.sold === true)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Item.findByIdAndUpdate({ _id: itemid }, { "sold": false })];
                    case 2:
                        updateditem = _a.sent();
                        return [2 /*return*/, updateditem];
                    case 3:
                        if (!(item.sold === false)) return [3 /*break*/, 5];
                        return [4 /*yield*/, Item.findByIdAndUpdate({ _id: itemid }, { "sold": true })];
                    case 4:
                        updateditem = _a.sent();
                        return [2 /*return*/, updateditem];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //metodo para cambiar la bandera de deleted (el parametro es el ID)
    sales_data.prototype.ItemsdeletedUpdate = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var itemid, item, updateditem, updateditem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemid = json._id;
                        return [4 /*yield*/, Item.findOne({ _id: itemid })];
                    case 1:
                        item = _a.sent();
                        if (!(item.deleted === true)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Item.findByIdAndUpdate({ _id: itemid }, { "deleted": false })];
                    case 2:
                        updateditem = _a.sent();
                        return [2 /*return*/, updateditem];
                    case 3:
                        if (!(item.deleted === false)) return [3 /*break*/, 5];
                        return [4 /*yield*/, Item.findByIdAndUpdate({ _id: itemid }, { "deleted": true })];
                    case 4:
                        updateditem = _a.sent();
                        return [2 /*return*/, updateditem];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //metodo para ofertar un producto
    sales_data.prototype.ItemspushPrice = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var itemid, updateditem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemid = json.itemid;
                        return [4 /*yield*/, Item.update({ _id: itemid }, { $push: { offers: json.offer } })];
                    case 1:
                        updateditem = _a.sent();
                        return [4 /*yield*/, Item.update({ _id: itemid }, { lastPrice: json.offer.amount })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, updateditem];
                }
            });
        });
    };
    return sales_data;
}());
exports.sales_data = sales_data;
