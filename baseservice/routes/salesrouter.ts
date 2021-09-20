import * as express from 'express';
import { Logger } from '../common'
import { salesController } from '../controllers'

const app = express();
const log = new Logger();

app.get("/usersfind", (req, res, next) => {

    salesController.getInstance().usersfind()
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

app.get("/usersfindbyid", (req, res, next) => {

    salesController.getInstance().usersfindbyid(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

app.get("/itemsfindall", (req, res, next) => {

    salesController.getInstance().itemsfindall()
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

app.get("/itemsfind", (req, res, next) => {

    salesController.getInstance().itemsfind()
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

app.get("/itemsfindbyid", (req, res, next) => {

    salesController.getInstance().itemsfindbyid(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

app.get("/itemsfindsold", (req, res, next) => {

    salesController.getInstance().itemsfindsold()
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

app.get("/itemsfinddates", (req, res, next) => {

    salesController.getInstance().itemsfinddates(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

app.get("/itemsfindrangeprices", (req, res, next) => {

    salesController.getInstance().itemsfindrangeprices(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

app.get("/itemsfindrangeyears", (req, res, next) => {

    salesController.getInstance().itemsfindrangeyears(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

app.post("/itemscreate", (req, res, next) => {

    salesController.getInstance().itemscreate(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

app.post("/userscreate", (req, res, next) => {

    salesController.getInstance().userscreate(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

app.put("/itemsdelete", (req, res, next) => {
    
    salesController.getInstance().itemsdelete(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

app.put("/itemscheckdate", (req, res, next) => {
    
    salesController.getInstance().Itemscheckdate(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

app.put("/itemsstatusupdate", (req, res, next) => {
    
    salesController.getInstance().itemsstatusupdate(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

app.put("/itemsdeletedupdate", (req, res, next) => {
    
    salesController.getInstance().itemsdeletedupdate(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

app.put("/itemspushprice", (req, res, next) => {
    
    salesController.getInstance().itemspushprice(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    })

});

export { app as salesrouter };