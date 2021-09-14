
//import mongoose from 'mongoose';
//import { mainModule } from 'process';
//import { boolean } from 'webidl-conversions';
//const { Schema } = mongoose;

require('./connection')

const Item = require("./models/Products");



const item = new Item({
    name: "HP OMEN Laptop",
    description: "HP OMEN laptop, Intel i7-10700, 16GB RAM, 512SSD, usada como nueva :)",
    year: 2017,
    imgURL: "www.images.com/image01",
    initialPrice: 100000,
    lastPrice: 100000,
    currency: "usd",
    creationDate: Date.now(),
    maxDate: new Date(2021,09,30),
    ownerName: "Manuel Casasola Mayorga",
    ownerId: "118240620",
    ownerEmail: "mcasasolam@gmail.com",
    active: true,
    buyer: {name: "Esteven Fernandez Hernandez", id: "ABCDE12345"}

});

/*
item.save((err, document) => {
    if(err) console.log(err);
    console.log(document);
});
*/