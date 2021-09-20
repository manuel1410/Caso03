"use strict";
exports.__esModule = true;
exports.salesrouter = void 0;
var express = require("express");
var common_1 = require("../common");
var controllers_1 = require("../controllers");
var app = express();
exports.salesrouter = app;
var log = new common_1.Logger();
app.get("/usersfind", function (req, res, next) {
    controllers_1.salesController.getInstance().usersfind()
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
app.get("/usersfindbyid", function (req, res, next) {
    controllers_1.salesController.getInstance().usersfindbyid(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
app.get("/itemsfindall", function (req, res, next) {
    controllers_1.salesController.getInstance().itemsfindall()
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
app.get("/itemsfind", function (req, res, next) {
    controllers_1.salesController.getInstance().itemsfind()
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
app.get("/itemsfindbyid", function (req, res, next) {
    controllers_1.salesController.getInstance().itemsfindbyid(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
app.get("/itemsfindsold", function (req, res, next) {
    controllers_1.salesController.getInstance().itemsfindsold()
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
app.get("/itemsfinddates", function (req, res, next) {
    controllers_1.salesController.getInstance().itemsfinddates(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
app.get("/itemsfindrangeprices", function (req, res, next) {
    controllers_1.salesController.getInstance().itemsfindrangeprices(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
app.get("/itemsfindrangeyears", function (req, res, next) {
    controllers_1.salesController.getInstance().itemsfindrangeyears(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
app.post("/itemscreate", function (req, res, next) {
    controllers_1.salesController.getInstance().itemscreate(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
app.post("/userscreate", function (req, res, next) {
    controllers_1.salesController.getInstance().userscreate(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
app.put("/itemsdelete", function (req, res, next) {
    controllers_1.salesController.getInstance().itemsdelete(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
app.put("/itemscheckdate", function (req, res, next) {
    controllers_1.salesController.getInstance().Itemscheckdate(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
app.put("/itemsstatusupdate", function (req, res, next) {
    controllers_1.salesController.getInstance().itemsstatusupdate(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
app.put("/itemsdeletedupdate", function (req, res, next) {
    controllers_1.salesController.getInstance().itemsdeletedupdate(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
app.put("/itemspushprice", function (req, res, next) {
    controllers_1.salesController.getInstance().itemspushprice(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
