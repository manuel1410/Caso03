import { sales_data } from "../repositories/sales_data";
import { Logger } from "../common";

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

}