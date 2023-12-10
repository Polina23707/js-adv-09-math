// TODO: write your code here
import { Magician } from "./magician";
import { Math } from "./math";

console.log('worked');

let magician = new Magician('Magician');
console.log(magician);
magician.stoned = 2;
magician.attack = 3;

console.log(magician.stoned);
console.log(magician.attack);
