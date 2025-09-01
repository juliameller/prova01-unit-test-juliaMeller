const Utilitarios = require("../src/utilitarios");

describe('Testes da classe Utilitarios', () => {
    let utilitario;

    beforeEach(() => {
        utilitario = new Utilitarios();
    });

    test("Validar inversão de string", async () => {
        expect(utilitario.inverterString('satc')).toBe('ctas');
      });

    test("Validar contagem caracteres", async () => {
        expect(utilitario.contarCaracteres('satc')).toBe(4);
    });

    test("Validar transformar str em maiúscula", async () => {
        expect(utilitario.paraMaiusculas('satc')).toBe('SATC');
    });

    test("Validar transformar str em minúscula", async () => {
        expect(utilitario.paraMinusculas('SATC')).toBe('satc');
    });

    test("Validar transformar 1a letra maiúscula", async () => {
        expect(utilitario.primeiraLetraMaiuscula('satc')).toBe('Satc');
    });

    test("Somar dois valores válidos", async () => {
        expect(utilitario.somar(1, 2)).toStrictEqual(3);
    });

    test("Subtrair dois valores válidos", async () => {
        expect(utilitario.subtrair(10, 2)).toStrictEqual(8);
    });

    test("Multiplicar dois valores válidos", async () => {
        expect(utilitario.multiplicar(10, 2)).toStrictEqual(20);
    });

    test("Dividir dois valores válidos", async () => {
        expect(utilitario.dividir(10, 2)).toStrictEqual(5);
    });

    test("Dividir dois valores inválidos", () => {
        expect(() => utilitario.dividir(10, 0)).toThrow("Divisão por zero");
    });

    test("Validar se é número par passando valor par", async () => {
        expect(utilitario.ehPar(10)).toBeTruthy();
    });

    test("Validar se é número par passando valor ímpar", async () => {
        expect(utilitario.ehPar(5)).toBeFalsy();
    });

    test("Validar se trás primeiro elemento corretamente", async () => {
        expect(utilitario.primeiroElemento([1, 2, 3, 4])).toBe(1);
    });

    test("Validar se trás último elemento corretamente", async () => {
        expect(utilitario.ultimoElemento([1, 2, 3, 4])).toBe(4);
    });

    test("Validar se trás tamanho do array corretamente", async () => {
        expect(utilitario.tamanhoArray([1, 2, 3, 4])).toBe(4);
    });

    test("Validar se ordena array corretamente", async () => {
        expect(utilitario.ordenarArray([4, 1, 3, 2])).toEqual([1, 2, 3, 4]);
    });

    test("Validar se inverte array corretamente", async () => {
        expect(utilitario.inverterArray([4, 1, 3, 2])).toEqual([2, 3, 1, 4]);
    });

    test("Validar número corretamente", async () => {
        expect(utilitario.ehNumero(1)).toBeTruthy();
    });

    test("Validar número corretamente passando array", async () => {
        expect(utilitario.ehNumero([4, 1])).toBeFalsy();
    });

    test("Validar remoção de espaços", async () => {
        expect(utilitario.removerEspacos('teste ')).toBe('teste');
    });

    test("Validar repetição de texto", async () => {
        expect(utilitario.repetirTexto('teste', 2)).toBe('testeteste');
    });

    test("Validar junção de string", async () => {
        expect(utilitario.juntarArray(['teste', 'julia'])).toBe('teste,julia');
    });

    test("Validar contagem palavras", async () => {
        expect(utilitario.contarPalavras('teste de contagem')).toBe(3);
    });

    test("Validar cálculo de média", async () => {
        expect(utilitario.mediaArray([4, 8])).toBe(6);
    });

    test("Validar remoção de valores duplicados", async () => {
        expect(utilitario.removerDuplicados([4, 8, 4])).toEqual([4, 8]);
    });

    test("Validar se é palíndromo", async () => {
        expect(utilitario.ehPalindromo('satc')).toBeFalsy();
    });

    test("Validar se é palíndromo", async () => {
        expect(utilitario.ehPalindromo('mirim')).toBeTruthy();
    });

})

