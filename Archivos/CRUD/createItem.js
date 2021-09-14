require('../connection')

const Item = require("../models/Products");

async function Itemcreate(){

    var Name = window.prompt("Enter the item name: ");
    var Description = window.prompt("Enter the item description: ");
    var Year = window.prompt("Enter the item year: ");
    var IMGURL = window.prompt("Enter the item imge URL: ");
    var InitialPrice = window.prompt("Enter the item initial price: ");
    var Currency = window.prompt("Enter the currency: ");
    var MaxDate = window.prompt("Enter the item max date: ");
    var OwnerName = window.prompt("Enter your name: ");
    var OwnerId= window.prompt("Enter your Id: ");
    var OwnerEmail = window.prompt("Enter your email: ");



    const item = new Item({
        name: Name,
        description: Description,
        year: year,
        imgURL: IMGURL,
        initialPrice: InitialPrice,
        lastPrice: initialPrice,
        currency: Currency,
        creationDate: Date.now(),
        maxDate: new Date(MaxDate),
        ownerName: OwnerName,
        ownerId: OwnerId,
        ownerEmail: OwnerEmail,
        active: true,
        buyer: {name: "", id: ""}
    });


    console.log(item.name, item.description);

}

Itemcreate()