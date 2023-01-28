export function logarTempoDeExecucao() {
  return function (
    target: any,
    propertyKey: string,
    descripitor: PropertyDescriptor
  ){
    const metodoOriginal = descripitor.value;
    descripitor.value = function(...args: Array<any>) {
      const t1 = performance.now();
      //Chamar metodo original
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`${propertyKey}, tempode execução: ${(t2 -t1)/1000} segundos.`);
      return retorno;
    };
    return descripitor;
  }
}