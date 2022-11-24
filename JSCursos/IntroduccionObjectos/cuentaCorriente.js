
export class CuentaCorriente {
  numero;
  saldo;
  agencia;

  constructor() {
    this.saldo = 0;
    this.numero = "";
    this.agencia = "";
  }
  /* forma de depositar en saldo 🤑 */
  depositoEnCuenta(valor) {
    if (valor > this.saldo) this.saldo += valor;
    return this.saldo;
  }
  /* forma de retirar🤑  */
  retirarDeCuenta(valor) {
    if (valor <= this.saldo) this.saldo -= valor;
    return this.saldo;
  }
  /* funcion para retornar saldo y comience a hablarnos el Js😁 */
  verSaldo() {
    return this.saldo;
  }
}
