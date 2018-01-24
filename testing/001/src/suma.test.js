import suma from 'suma'

describe('función suma', () => {
  test('debería sumar 1 + 1 = 2', () => {
    expect(suma(1, 1)).toBe(2)
  })

  test('debería sumar 1 + 0 = 1', () => {
    expect(suma(1, 0)).toBe(1)
  })

  test('devuelve NaN si sólo recibe un parámetro', () => {
    expect(suma(1)).toBe(NaN)
  })
})
