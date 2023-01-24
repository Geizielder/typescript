export class Negociacoes {
    constructor() {
        //pode ser usado generics nesse formato Array<Negociacao> 
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // pode ser usado nesse formato ReadonlyArray<Negociacao>
    //O Readonly permite apenas a leitura do array impedindo que se faça alterações usando methods com pop ou push, por exemplo.
    lista() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
});
