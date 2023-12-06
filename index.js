import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Diego", 61695491904);
const cliente2 = new Cliente("Alice", 88122244309);



const contaCorrenteDiego = new ContaCorrente(1001, cliente1);


contaCorrenteDiego.depositar(500);




let valor = 200;

contaCorrenteDiego.tranferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);








