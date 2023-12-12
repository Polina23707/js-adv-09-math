export class Characters {
  constructor(name) {
    this.name = name;
    // this.demage= 100;
    this.health = 100;
  }
  
  get stoned() {
    return this._stoned;
  }

  set stoned(location) {
    let stonedLevel = new Map([[1, 1] , [2, 0.9] ,[3, 0.8] , [4, 0.7] , [5, 0.6]]);
    console.log(stonedLevel.get(location));
    this._stoned = this.health * stonedLevel.get(location);
    console.log(this._stoned);
    this.health = this.health - this._stoned;
    console.log(this.health);
  }

  get attack() {
    return this._attack;
  }

  set attack(location) {
    let dopeLevel = Math.log2(location) * 5;
    this._attack = dopeLevel ;
  }
}
