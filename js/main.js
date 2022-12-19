async function buscaEndereco(cep) {
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida) {
            throw Error('CEP inválido!')
        }
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro)
    }
}
let ceps = ['01001000', '01001001'];
let conjutoCeps = ceps.map(valores => buscaEndereco(valores))
Promise.all(conjutoCeps).then(respostas => console.log(respostas))






















// .then(resposta => resposta.json())
//     .then(r => {
//         if (r.erro) {
//             throw Error('Esse cep não existe!')
//         } else
//             console.log(r)
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log('Processamento concluído'));