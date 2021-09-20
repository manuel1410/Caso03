import { sales_data } from "../repositories/sales_data";
import { Logger } from "../common";
import { Request, ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
const Item = require("../models/products");
const User = require("../models/users");
const bcrypt = require ('bcrypt');
const saltRounds = 10;

export class salesController {

    private static instance: salesController;
    private log: Logger;
    private db : any;

    private constructor()
    {
        this.log = new Logger();
        try
        {
        } catch (e)
        {
            this.log.error(e);
        }
    }

    public static getInstance() : salesController
    {
        if(!this.instance)
        {
            this.instance = new salesController();
        }
        return this.instance;
    }

    public usersfind() : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.Usersfind();
    }

    public usersfindbyid(json: any) : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.UsersfindByid(json);
    }

    public itemsfindall() : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.ItemsfindAll();
    }

    public itemsfind() : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.Itemsfind();
    }

    public itemsfindbyid(req: any) : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.ItemsfindByid(req);
    }

    public itemsfindsold() : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.ItemsfindSold();
    }

    public itemsfinddates(req: any) : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.ItemsfindDates(req);
    }

    public itemsfindrangeprices(req: any) : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.ItemsfindRangeprices(req);
    }

    public itemsfindrangeyears(req: any) : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.ItemsfindRangeyears(req);
    }

    public async userscreate(req: any) : Promise<any>
    {
        var json = req;
        const password = json.password;

        await bcrypt.genSalt(saltRounds, function(err: any, salt: any) {
            if(err){
                console.log(err);
            }
            else{
                bcrypt.hash(password, salt, function(err: any, hash: any){
                    if(err){
                        console.log(err);
                    }
                    else{
                        const hashedpassword = hash;
                        json.password = hashedpassword;

                        const salesdb = new sales_data();
                        return salesdb.Userscreate(json);
                    }
                });
                
            }
          });
        
    }
    
    public itemscreate(req: any) : Promise<any>
    {

        var json = req;


        const initdateString = json.creationDate;
        const initdate_aux = new Date(initdateString);
        const initdateUTC = initdate_aux.setTime(initdate_aux.getTime()+(6*60*60*1000));
        const initdate = new Date(initdateUTC);

        const lastdateString = json.maxDate;
        const lastdate_aux = new Date(lastdateString);
        const lastdateUTC = lastdate_aux.setTime(lastdate_aux.getTime()+(6*60*60*1000));
        const lastdate = new Date(lastdateUTC);

        const prettyinitdate = initdate.toLocaleDateString();
        const initdatehour = initdate.toLocaleTimeString();
        const prettylastdate = lastdate.toLocaleDateString();
        const lastdatehour = lastdate.toLocaleTimeString();


        json.lastPrice = json.initialPrice;
        json.creationDatepretty = prettyinitdate;
        json.creationDateHour = initdatehour;
        json.maxDatepretty = prettylastdate;
        json.maxDateHour = lastdatehour;

        const salesdb = new sales_data();
        return salesdb.Itemscreate(json);
    }

    public itemsdelete(req: any) : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.Itemsdelete(req);
    }

    public Itemscheckdate(req: any) : Promise<any>
    {

        const date = new Date(req.date);

        const json = req;
        json.date = date;

        const salesdb = new sales_data();
        return salesdb.ItemsCheckdate(json);
    }

    public itemsstatusupdate(req: any) : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.ItemsstatusUpdate(req);
    }

    public itemsdeletedupdate(req: any) : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.ItemsdeletedUpdate(req);
    }
    
    public async itemspushprice(req: any) : Promise<any>
    {

        const itemid = req.itemid;

        const items = await Item.find({ _id: itemid});
        const item = items[0];

        const ult = item.offers.length-1;

        if(item.offers.length !== 0){
            
            if((req.offer.amount > item.offers[ult].amount) && (item.sold === false)){

            const salesdb = new sales_data();
            return salesdb.ItemspushPrice(req);
            }

        } else if(item.offers.length === 0 ){
            
            if(item.sold === false){

                if(req.offer.amount >= item.initialPrice){
                const salesdb = new sales_data();
                return salesdb.ItemspushPrice(req);
                }

            }
        }
        
    }

}