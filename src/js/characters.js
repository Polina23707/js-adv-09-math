export class Characters {
  constructor(name) {
    this.name = name;
    this.power = 100;
  }
  
  get stoned() {
    return this._stoned;
  }

  set stoned(location) {
    let stonedLevel = new Map([[1, 1] , [2, 0.9] ,[3, 0.8] , [4, 0.7] , [5, 0.6]]);
    this._stoned = stonedLevel.get(location);
    this.power = this.power - this._stoned;
  }

  get attack() {
    return this._attack;
  }

  set attack(location) {
    // let dopeLevel = Math.log2(location) * 5;
    let dopeLevel = this._stoned;
    this._attack = this._stoned + dopeLevel;
    this.power = this.power - this._attack;

  }
}