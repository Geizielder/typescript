import { NegociacoesDoDia } from "../interfaces/negocoacao-do-dia";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

  public obterNegocioacoesDoDia(): Promise<Negociacao[]> {
    return fetch('http://localhost:8080/dados')
      .then(res => res.json())
      .then((dados: NegociacoesDoDia[]) => {
        return dados.map(dadoHoje => {
          return new Negociacao(new Date(), dadoHoje.vezes, dadoHoje.montante)
        });
      });
  }
}