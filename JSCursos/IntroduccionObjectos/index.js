import { CuentaCorriente } from "./cuentaCorriente.js"

let saldo = cuentaAlex.verSaldo();
console.log("El saldo actual es"+saldo);

cuentaAlex = new CuentaCorriente();
cuentaAlex.depositoEnCuenta(1000);
cuentaAlex.retirarDeCuenta(500);
console.log(cuentaAlex);









/* Cliente01, aqui se abrio nuevo cliente*/
const cliente1 = new Cliente();

cliente1.nombreCliente = "Luis";
cliente1.dniCliente = "hedl94";
cliente1.rutCliente = "31235546";

/* Cuenta corriente, aqui se creo nueva cuenta */
const cCorriente1 = new CuentaCorriente();

cCorriente1.numero = "310067010";
cCorriente1.saldo = 30015;
cCorriente1.agencia = 102345;
cCorriente1.depositoEnCuenta = 500;
cCorriente1



/*Cliente */
const nombreCliente = "Alex";
const dniCliente = "13804050";
const numeroCuenta = "123432323";
const saldoCuenta = 1000;

/* console.log(nombreCliente); */
/* console.log(cliente1); */
