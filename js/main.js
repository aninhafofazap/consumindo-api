async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP inválido!')
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `
        <p> CEP inválido, tente novamente!</p>
        `
        console.log(erro)
    }
}

const cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));









// Lidando com varias requisições ao mesmo tempo
// let ceps = ['01001000', '01001001'];
// let conjutoCeps = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjutoCeps).then(respostas => console.log(respostas));