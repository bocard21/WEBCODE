function submitForm() {
    const form = document.getElementById('formCadastro');
    console.log('Cadastro realizado com sucesso:');
    console.log(`Placa: ${document.getElementById('placa').value}`);
    console.log(`Proprietário: ${document.getElementById('proprietario').value}`);
    console.log(`Apartamento: ${document.getElementById('apartamento').value}`);
    console.log(`Bloco: ${document.getElementById('bloco').value}`);
    console.log(`Modelo: ${document.getElementById('modelo').value}`);
    console.log(`Cor: ${document.getElementById('cor').value}`);
    console.log(`Vaga: ${document.getElementById('vaga').value}`);
    alert('Cadastro realizado com sucesso!');
}
