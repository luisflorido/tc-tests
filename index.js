module.exports = class Aleatorio {
    gerarNumeroAleatorio(inicio, fim) {
        if (inicio < 0 || fim < 0)
            return -1;

        if (inicio >= fim)
            return -1;
        
        return Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
    }
}