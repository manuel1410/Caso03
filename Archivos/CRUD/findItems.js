require('../connection')

const Item = require("../models/Products");

async function ItemsfindAll(){

    const items = await Item.find();
    console.log(items);

}

//ItemsfindAll();
