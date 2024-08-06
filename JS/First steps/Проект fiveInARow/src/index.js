import { askPoint, askSize, outField, sayWin } from "./client.js";
import Logic from './logic.js';

const fieldSize = askSize();
const logic = new Logic(fieldSize);
let point;

do {
    outField(logic.field);
    point = askPoint(fieldSize, logic.isFilled.bind(logic));
    logic.setPoint(point);
} while (!logic.isWin(point));

sayWin(); 
outField(logic.field);