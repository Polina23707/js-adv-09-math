import { Characters } from "./characters";

export class Magician extends Characters {
  constructor(name) {
    super(name);
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(location) {
    let attackLevel = new Map([[1, 1] , [2, 0.9] ,[3, 0.8] , [4, 0.7] , [5, 0.6]]);
    this._stoned = attackLevel.get(location) - Math.log2(location) * 5;
    console.log(this._stoned);
  }  
}