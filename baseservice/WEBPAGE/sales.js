$('head').append("<link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'/>");

$('head').append('<meta name="apple-mobile-web-app-capable" content="yes"/>');

$('head').append('<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.5, user-scalable=yes"/>');

// handlebar methods

// load card template
var cardTemplate = Handlebars.compile($("#card-template").html());


// cards
var cards = [
    {
        "owner": {
            "ownerName": "Manuel Casasola Mayorga",
            "ownerId": "6148419b1dd69474d9c5c021",
            "ownerEmail": "mcasasolam@gmail.com"
        },
        "_id": "614841f51dd69474d9c5c026",
        "name": "HP OMEN Laptop",
        "description": "HP OMEN laptop, Intel i7-10700, 16GB RAM, 512SSD, usada como nueva :)",
        "year": 2017,
        "imgURL": "https://lh3.google.com/u/0/d/1tgKXWdGHgIGK_QQcmuLcXkE0BudFglph=w1440-h789-iv1",
        "initialPrice": 100000,
        "lastPrice": 3000000,
        "currency": "usd",
        "creationDate": "2021-09-14T00:00:00.000Z",
        "creationDatepretty": "14/9/2021",
        "creationDateHour": "0:00:00",
        "maxDate": "2021-09-30T00:00:00.000Z",
        "maxDatepretty": "30/9/2021",
        "maxDateHour": "0:00:00",
        "sold": false,
        "deleted": false,
        "offers": [
            {
                "amount": 1000000,
                "buyername": "Esteven Fernandez Hernandez",
                "buyerid": "614841a11dd69474d9c5c023",
                "_id": "614842641dd69474d9c5c035"
            },
            {
                "amount": 2000000,
                "buyername": "Esteven Fernandez Hernandez",
                "buyerid": "614841a11dd69474d9c5c023",
                "_id": "614842691dd69474d9c5c03a"
            },
            {
                "amount": 3000000,
                "buyername": "Esteven Fernandez Hernandez",
                "buyerid": "614841a11dd69474d9c5c023",
                "_id": "6148426e1dd69474d9c5c040"
            }
        ],
        "__v": 0
    },
    {
        "owner": {
            "ownerName": "Manuel Casasola Mayorga",
            "ownerId": "6148419b1dd69474d9c5c021",
            "ownerEmail": "mcasasolam@gmail.com"
        },
        "_id": "6148420c1dd69474d9c5c028",
        "name": "Corsair RGB Keyboard",
        "description": "Teclado marca Coursair RGB como nuevo",
        "year": 2019,
        "imgURL": "https://lh3.google.com/u/0/d/1k7TjCme_kBYFn77Z6Jm6WE8Eys7nP8bF=w1440-h789-iv1",
        "initialPrice": 20000,
        "lastPrice": 20000,
        "currency": "usd",
        "creationDate": "2021-09-14T00:00:00.000Z",
        "creationDatepretty": "14/9/2021",
        "creationDateHour": "0:00:00",
        "maxDate": "2021-09-30T00:00:00.000Z",
        "maxDatepretty": "30/9/2021",
        "maxDateHour": "0:00:00",
        "sold": false,
        "deleted": false,
        "offers": [],
        "__v": 0
    },
    {
        "owner": {
            "ownerName": "Manuel Casasola Mayorga",
            "ownerId": "6148419b1dd69474d9c5c021",
            "ownerEmail": "mcasasolam@gmail.com"
        },
        "_id": "614842131dd69474d9c5c02a",
        "name": "Corsair RGB Mouse",
        "description": "Mouse marca Coursair RGB como nuevo",
        "year": 2020,
        "imgURL": "https://lh3.google.com/u/0/d/1dQ4C18B8rhuMl--Eb_gUFUU9pIFYpTnh=w1440-h789-iv1",
        "initialPrice": 5000,
        "lastPrice": 5000,
        "currency": "usd",
        "creationDate": "2021-09-14T00:00:00.000Z",
        "creationDatepretty": "14/9/2021",
        "creationDateHour": "0:00:00",
        "maxDate": "2021-09-30T00:00:00.000Z",
        "maxDatepretty": "30/9/2021",
        "maxDateHour": "0:00:00",
        "sold": false,
        "deleted": false,
        "offers": [],
        "__v": 0
    },
    {
        "owner": {
            "ownerName": "Manuel Casasola Mayorga",
            "ownerId": "6148419b1dd69474d9c5c021",
            "ownerEmail": "mcasasolam@gmail.com"
        },
        "_id": "614842191dd69474d9c5c02c",
        "name": "Corsair Gamer Chair",
        "description": "Silla marca Coursair como nueva",
        "year": 2018,
        "imgURL": "https://lh3.google.com/u/0/d/10D8O5bV6M3n-q1h-sl2lVqGeGCuw-vXq=w1440-h789-iv1",
        "initialPrice": 50000,
        "lastPrice": 50000,
        "currency": "usd",
        "creationDate": "2021-09-19T00:00:00.000Z",
        "creationDatepretty": "19/9/2021",
        "creationDateHour": "0:00:00",
        "maxDate": "2021-09-25T00:00:00.000Z",
        "maxDatepretty": "25/9/2021",
        "maxDateHour": "0:00:00",
        "sold": false,
        "deleted": false,
        "offers": [],
        "__v": 0
    },
    {
        "owner": {
            "ownerName": "Manuel Casasola Mayorga",
            "ownerId": "6148419b1dd69474d9c5c021",
            "ownerEmail": "mcasasolam@gmail.com"
        },
        "_id": "6148421e1dd69474d9c5c02e",
        "name": "Samsung HD Monitor",
        "description": "Monitor marca Samsung como nuevo Full HD 1920x1080",
        "year": 2021,
        "imgURL": "https://lh3.google.com/u/0/d/1fidVby66-nFJkRGHf_KVIUVnXRcTZlEi=w1440-h789-iv1",
        "initialPrice": 300000,
        "lastPrice": 300000,
        "currency": "usd",
        "creationDate": "2021-09-17T00:00:00.000Z",
        "creationDatepretty": "17/9/2021",
        "creationDateHour": "0:00:00",
        "maxDate": "2021-09-27T00:00:00.000Z",
        "maxDatepretty": "27/9/2021",
        "maxDateHour": "0:00:00",
        "sold": false,
        "deleted": false,
        "offers": [],
        "__v": 0
    },
    {
        "owner": {
            "ownerName": "Manuel Casasola Mayorga",
            "ownerId": "6148419b1dd69474d9c5c021",
            "ownerEmail": "mcasasolam@gmail.com"
        },
        "_id": "614842241dd69474d9c5c030",
        "name": "Webcam Escorpion",
        "description": "WEBcam (cámara para computadora) marca Escorpion como nuevo.",
        "year": 2020,
        "imgURL": "https://lh3.google.com/u/0/d/1lhC4A65C_eky7HWnGp4BTy-XeLE6U4Mr=w1440-h789-iv1",
        "initialPrice": 23000,
        "lastPrice": 23000,
        "currency": "usd",
        "creationDate": "2021-09-20T00:00:00.000Z",
        "creationDatepretty": "20/9/2021",
        "creationDateHour": "0:00:00",
        "maxDate": "2021-09-26T00:00:00.000Z",
        "maxDatepretty": "26/9/2021",
        "maxDateHour": "0:00:00",
        "sold": false,
        "deleted": false,
        "offers": [],
        "__v": 0
    }
];

$.each(cards, function(index, card) {
    $(".cards").append(cardTemplate(card)); 
});