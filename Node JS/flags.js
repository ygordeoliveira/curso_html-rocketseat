//CRIEI UMA FUNÇÃO QUE UMA STRING//
//GUARDO NUMA VARIAVEL INDEX UMA PROCURA DE QUAL QUE É A POSIÇÃO DO ARR DO ARGV DA FLAG//
//AO ACHAR ESSA POSIÇÃO, FAÇO ELA + 1//
//QUANDO ACHA A POSIÇÃO DA FLAG, PEGA ESSA POSIÇÃO E MAIS 1 E GUARDA NO INDEX//
//RETORNA O RESULTADO DA FLAG//

function getFlags(flag) {
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
}

//EXPORTEI ESSA FUNÇÃO GETFLAGS//
module.exports = getFlags;