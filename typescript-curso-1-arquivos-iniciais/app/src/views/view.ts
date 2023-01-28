import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execocao.js";

export abstract class View<T> {

  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento =  document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletro ${seletor} não exite no DOM. Verifique.`);
    }
    if (escapar) {
      this.escapar = escapar;
    }
  }
  @logarTempoDeExecucao()
  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }    

  }

  protected abstract template(model: T): string;

}