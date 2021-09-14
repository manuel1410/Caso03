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

    public async ItemsfindAll(){
        const items = await Item.find();
        console.log(items);
    }
}