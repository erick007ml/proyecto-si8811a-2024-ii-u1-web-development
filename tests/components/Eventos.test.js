
describe('Test de prueba', () => {
  test('debe retornar un saludo"', () => {
    const name = 'Erick'
    const message = 'Hola Erick'
    expect(message).toBe(`Hola ${name}`)
  })
})