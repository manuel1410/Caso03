import * as express from 'express';
import { Logger } from '../common'
import { salesController } from '../controllers'

const app = express();
const log = new Logger();

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

app.delete("/itemsdelete", (req, res, next) => {
    
    salesController.getInstance().itemsdelete(req.body)
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

export { app as salesrouter };