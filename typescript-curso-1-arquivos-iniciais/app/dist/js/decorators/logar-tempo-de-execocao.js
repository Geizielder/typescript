export function logarTempoDeExecucao() {
    return function (target, propertyKey, descripitor) {
        const metodoOriginal = descripitor.value;
        descripitor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempode execução: ${(t2 - t1) / 1000} segundos.`);
            return retorno;
        };
        return descripitor;
    };
}
