export default class Characters {
  constructor(name) {
    this.name = name;
    this._attack = 100;
    this._stoned = 0;
  }

  get attack() {
    this._attack = 100;
    return this._attack;
  }

  set attack(distance) {
    let attackLevel = new Map([[1, 1] , [2, 0.9] ,[3, 0.8] , [4, 0.7] , [5, 0.6]]);
    this._attack *= attackLevel.get(distance);
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(distance) {
    this.attack = distance;
    this._stoned = Math.log2(distance) * 5;
    this._attack -=  this._stoned;
  }  
}
