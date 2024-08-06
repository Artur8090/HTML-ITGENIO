import { askSize, sayWin } from "./client.js";
import Logic from './logic.js';
import Client from "./client.js";
async function main(){
    const fieldSize = await askSize();
    const logic = new Logic(fieldSize);
    const client = new Client(fieldSize)
    let point;
    do {
        client.outField(logic.field);
        point = await client.askPoint(logic.isFilled);
        logic.setPoint(point);
    } while (!logic.isWin(point));
    outField(logic.field);  
    sayWin(); 
}
main();
