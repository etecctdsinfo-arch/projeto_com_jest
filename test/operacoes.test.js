
import { somar, subtrair, multiplicar, dividir } from '../calculadora/operacoes.js'

// descrição   +   função que será executada
test("Testar a função somar", ()=>{
    // expectativa de retorno 15
    let resultado = somar(100, 5)
    expect(resultado).toBe(105)
} )

test("Testar a função subtrair", ()=>{
    // expectativa de retorno 15
    let resultado = subtrair(100, 5)
    expect(resultado).toBe(95)
} )