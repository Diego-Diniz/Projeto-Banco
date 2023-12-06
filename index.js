import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Diego";
cliente1.cpf = 11122233309;


const cliente2 = new Cliente();
 cliente2.nome = "Alice";
 cliente2.cpf = 88122244309;

 const contaCorrenteDiego = new ContaCorrente();
 contaCorrenteDiego.agencia = 1001;
 contaCorrenteDiego.cliente = cliente1;
 contaCorrenteDiego.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

let valor = 200;

contaCorrenteDiego.tranferir(valor,conta2);

console.log("valor: ", valor);
console.log(conta2);
console.log(contaCorrenteDiego);








