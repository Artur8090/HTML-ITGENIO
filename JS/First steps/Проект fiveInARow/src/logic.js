export default class Logic{
    _field = [];
    constructor(size){
        for(let i = 0; i < size; i++)
            this._field.push(new Array(size))
    }
}