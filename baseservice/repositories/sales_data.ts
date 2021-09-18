import { start } from 'repl'
import { Logger } from '../common'

require('../connection')
const Item = require("../models/products");
const User = require("../models/users");

export class sales_data {

    private log: Logger;
    private static poolconnector: any;
    private static globalpool: any;

    public constructor()
    {}

    //Metodo para buscar todos los usuarios NO borrados
    public async Usersfind(){
        const users = await User.find({deleted: false});
        return users;
    }

    //Metodo para buscar todos los items
    public async ItemsfindAll(){
        const items = await Item.find();
        return items;
    }

    //Metodo para buscar todos los items NO borrados y no vendidos
    public async Itemsfind(){
        const items = await Item.find({deleted: false}, {sold: false});
        return items;
    }

    //metodo para insertar un usuario (el parametro es el JSON del objeto)
    public async Userscreate(json: any){

        const user = new User(json);
        
        const inserteduser = await user.save();
        return inserteduser;
    }

    //metodo para insertar un item (el parametro es el JSON del objeto)
    public async Itemscreate(json: any){

        const item = new Item(json);
        
        const inserteditem = await item.save();
        const updateduser = this.ItemsregisterOwner(json);
        return inserteditem;
    }

    //metodo que actualiza los productos de un usuario cuando se inserta un item nuevo (se llama siempre despues de Itemscreate(json: any))
    public async ItemsregisterOwner(json: any){

        const id = json.owner.ownerId;
        
        const updateduser = await User.update({ _id: id }, { $push: { products: json } });
        return updateduser;
    }

    //metodo para buscar y eliminar un item (el parametro es el JSON del objeto)
    public async Itemsdelete(json: any){

        const itemid = json._id;

       if (json.deleted === false){
            const updateditem = await Item.findByIdAndUpdate({_id: itemid}, {"deleted": true});
            return updateditem;
        }
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
    
    //metodo para cambiar la bandera de deleted
    public async ItemsdeletedUpdate(json: any){

        const itemid = json._id;

        if(json.deleted === true){
            const updateditem = await Item.findByIdAndUpdate({_id: itemid}, {"deleted": false});
            return updateditem;
        }
        else if (json.deleted === false){
            const updateditem = await Item.findByIdAndUpdate({_id: itemid}, {"deleted": true});
            return updateditem;
        }
        
    }

    //metodo para ofertar un producto
    public async ItemspushPrice(json: any){

        const itemid = json.itemid;
        /*
        console.log('data');
        console.log(itemid);
        console.log(json.offer);
        */
        const updateditem = await Item.update({ _id: itemid }, { $push: { offers: json.offer } });
                            await Item.update({ _id: itemid }, { lastPrice: json.offer.amount });
        return updateditem;
    }

}