import { json } from 'express';
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

    //Metodo para buscar un usuario por id
    public async UsersfindByid(json: any){
        const user = await User.find({_id: json._id});
        return user;
    }

    //Metodo para buscar todos los items
    public async ItemsfindAll(){
        const items = await Item.find();
        return items;
    }

    //Metodo para buscar todos los items NO borrados
    public async Itemsfind(){
        const items = await Item.find({deleted: false, sold: false});

        return items;
    }
    //Metodo para buscar por id
    public async ItemsfindByid(json: any){

        const items = await Item.find({_id: json._id});

        return items;
    }

    //Metodo para buscar todos los items NO borrados y NO vendidos
    public async ItemsfindSold(){
        const items = await Item.find({sold: true , deleted: false});

        return items;
    }

    //Metodo para buscar todos los items NO borrados y no vendidos por fechas
    public async ItemsfindDates(json: any){
        const items = await Item.find({deleted: false, sold: false, maxDate: {$lte: json.date } });
        return items;
    }

    public async ItemsfindRangeprices(json: any){
        const items = await Item.find({deleted: false, sold: false, lastPrice: {$gte: json.minprice, $lte: json.maxprice} });
        return items;
    }

    public async ItemsfindRangeyears(json: any){
        const items = await Item.find({deleted: false, sold: false, year: {$gte: json.minyear, $lte: json.maxyear} });
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

        return inserteditem;
        
    }

    //metodo que actualiza los productos de un usuario cuando se inserta un item nuevo (se llama siempre despues de Itemscreate(json: any))
    /*
    public async ItemsregisterOwner(json: any){

        const id = json.owner.ownerId;
        
        const updateduser = await User.update({ _id: id }, { $push: { products: json } });
        return updateduser;
    }
    */

    //metodo para buscar y eliminar un item (el parametro es el JSON del objeto)
    public async Itemsdelete(json: any){

        const itemid = json._id;

            const updateditem = await Item.findByIdAndUpdate({_id: itemid}, {"deleted": true});
            return updateditem;
    }

    //Metodo para revisar la fecha y actualizar el estado si se venció la fecha
    public async ItemsCheckdate(json: any){

        const itemid = json._id;
        const item = await Item.findOne({_id: itemid});

        if(json.date > item.maxDate){

            if(item.offers.length !== 0 ){
                const updateditem = await Item.findByIdAndUpdate({_id: item._id}, {"sold": true});
                return updateditem;
            } else if (item.offers.length === 0 ){
                const updateditem = await Item.findByIdAndUpdate({_id: item._id}, {"deleted": true});
                return updateditem;
            }
        }

    }

    //metodo para buscar y cambiar el estado de un item (el parametro es el ID)
    public async ItemsstatusUpdate(json: any){

        const itemid = json._id;
        const item = await Item.findOne({_id: itemid});

        if(item.sold === true){
            const updateditem = await Item.findByIdAndUpdate({_id: itemid}, {"sold": false});
            return updateditem;
        }
        else if (item.sold === false){
            const updateditem = await Item.findByIdAndUpdate({_id: itemid}, {"sold": true});
            return updateditem;
        }
        
    }
    
    //metodo para cambiar la bandera de deleted (el parametro es el ID)
    public async ItemsdeletedUpdate(json: any){

        const itemid = json._id;
        const item = await Item.findOne({_id: itemid});

        if(item.deleted === true){
            const updateditem = await Item.findByIdAndUpdate({_id: itemid}, {"deleted": false});
            return updateditem;
        }
        else if (item.deleted === false){
            const updateditem = await Item.findByIdAndUpdate({_id: itemid}, {"deleted": true});
            return updateditem;
        }
        
    }

    //metodo para ofertar un producto
    public async ItemspushPrice(json: any){

        const itemid = json.itemid;

        const updateditem = await Item.update({ _id: itemid }, { $push: { offers: json.offer } });
                            await Item.update({ _id: itemid }, { lastPrice: json.offer.amount });
        return updateditem;
    }




}