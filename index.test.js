const Aleatorio = require('./index');

const aleatorio = new Aleatorio();

describe('Testa classe aleatório', () => {
    test('inicio negativo', () => {
        expect(aleatorio.gerarNumeroAleatorio(-10, 5)).toEqual(-1);
    })

    test('fim negativo', () => {
        expect(aleatorio.gerarNumeroAleatorio(5, -10)).toEqual(-1);
    })

    test('inicio igual fim', () => {
        expect(aleatorio.gerarNumeroAleatorio(5, 5)).toEqual(-1);
    })

    test('intervalo válido', () => {
        const min = 200, max = 3000
        const gerado = aleatorio.gerarNumeroAleatorio(min, max)

        expect(gerado).toBeGreaterThanOrEqual(min);
        expect(gerado).toBeLessThanOrEqual(max)
    })
})