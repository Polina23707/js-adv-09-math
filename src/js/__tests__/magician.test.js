import Magician from "../daemon";

test('create magician', () => {
  const character = new Magician('Персонаж');
  expect(character.name).toBe('Персонаж');
})