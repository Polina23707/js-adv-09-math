import Characters from "../characters";

test('create characters', () => {
  const character = new Characters('Персонаж');
  expect(character.name).toBe('Персонаж');
})


test('characters get attack()', () => {
  const character = new Characters('Персонаж');
  character.attack;
  expect(character).toEqual({"_attack": 100, "_stoned": 0, "name": "Персонаж"});
})

test('characters set attack(2)', () => {
  const character = new Characters('Персонаж');
  character.attack = 2;
  expect(character).toEqual({"_attack": 90, "_stoned": 0,"name": "Персонаж"});
})

test('characters get stoned', () => {
  const character = new Characters('Персонаж');
  character.stoned;
  expect(character).toEqual({"_attack": 100, "_stoned": 0, "name": "Персонаж"});
})

test('characters set stoned', () => {
  const character = new Characters('Персонаж');
  character.stoned = 2;
  expect(character).toEqual({"_attack": 85, "_stoned": 5, "name": "Персонаж"});
})