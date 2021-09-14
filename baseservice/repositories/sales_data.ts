import { start } from 'repl'
import { Logger } from '../common'

require('../connection')
const Item = require("../models/Products");

export class sales_data {

    private log: Logger;
    private static poolconnector: any;
    private static globalpool: any;

    public constructor()
    {}

    //Metodo para buscar todos los items
    public async ItemsfindAll(){
        const items = await Item.find();
        return items;
    }

    //metodo para insertar un item (el parametro es el JSON del objeto)
    public async Itemscreate(json: any){

        const item = new Item(json);
        
        const inserteditem = await item.save();
        return inserteditem;
    }

    //metodo para buscar y eliminar un item (el parametro es el JSON del objeto)
    public async Itemsdelete(json: any){

        const deleteditem = await Item.deleteOne({ _id: json._id});
        
        return deleteditem;
    }

    //metodo para buscar y cambiar el estado de un item (el parametro es el JSON del objeto)
    public async ItemsstatusUpdate(json: any){

        const itemid = json._id;

        if(json.active === true){
            const updateditem = await Item.findByIdAndUpdate({_id: itemid}, {"active": false});
            return updateditem;
        }
        else if (json.active === false){
            const updateditem = await Item.findByIdAndUpdate({_id: itemid}, {"active": true});
            return updateditem;
        }
        
    }
    

}