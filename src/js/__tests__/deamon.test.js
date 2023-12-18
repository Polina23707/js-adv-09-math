import Deamon from "../daemon";

test('create deamon', () => {
  const character = new Deamon('Персонаж');
  expect(character.name).toBe('Персонаж');
})