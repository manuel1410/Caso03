require('../connection')

const Item = require("../models/Products");

async function ItemsfindOn(string){

    const items = await Item.find({name: string});
    console.log(items);

}

//ItemsfindOne();