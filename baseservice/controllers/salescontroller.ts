import { sales_data } from "../repositories/sales_data";
import { Logger } from "../common";
import { Request, ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

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

    public itemsfindall() : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.ItemsfindAll();
    }
    
    public itemscreate(req: any) : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.Itemscreate(req);
    }

    public itemsdelete(req: any) : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.Itemsdelete(req);
    }

    public itemsstatusupdate(req: any) : Promise<any>
    {
        const salesdb = new sales_data();
        return salesdb.ItemsstatusUpdate(req);
    }
    

}