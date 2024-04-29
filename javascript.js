function submitForm(event) {
    event.preventDefault();

    const dadosCadastro = {
        Placa: document.getElementById('placa').value,
        Proprietário: document.getElementById('proprietario').value,
        Apartamento: document.getElementById('apartamento').value,
        Bloco: document.getElementById('bloco').value,
        Modelo: document.getElementById('modelo').value,
        Cor: document.getElementById('cor').value,
        Vaga: document.getElementById('vaga').value
    };

    console.log('Cadastro realizado com sucesso:', dadosCadastro);
    document.getElementById('mensagemSucesso').style.display = 'block';
    setTimeout(() => document.getElementById('mensagemSucesso').style.display = 'none', 3000);
}

document.getElementById('formCadastro').addEventListener('submit', submitForm);
