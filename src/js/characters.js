export class Characters {
  constructor(name) {
    this.name = name;
  }

  get attack() {
    return this._attack;
  }

  set attack(location) {
    let attackLevel = new Map([[1, 1] , [2, 0.9] ,[3, 0.8] , [4, 0.7] , [5, 0.6]]);
    // console.log(attackLevel.get(location));
    this._attack = attackLevel.get(location);
  }
}
