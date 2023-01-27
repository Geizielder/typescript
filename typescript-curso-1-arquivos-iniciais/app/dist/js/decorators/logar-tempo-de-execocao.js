export function logarTempoDeExecucao() {
    return function (target, propertyKey, descripitor) {
        const metodoOriginal = descripitor.value;
        descripitor.value = function () {
            const t1 = performance.now();
            const retorno = metodoOriginal();
            const t2 = performance.now();
            console.log(`${propertyKey}, tempode execução: ${(t2 - t1) / 1000} segundos.`);
            retorno;
        };
        return descripitor;
    };
}
