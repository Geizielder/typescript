import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  //pode ser usado generics nesse formato Array<Negociacao> 
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }
  // pode ser usado nesse formato ReadonlyArray<Negociacao>
  //O Readonly permite apenas a leitura do array impedindo que se faça alterações usando methods com pop ou push, por exemplo.
  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}

const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {

});