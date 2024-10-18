// Inicializar EmailJS
(function() {
    emailjs.init("i0iGoJvPv9SLwll5m");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Coleta os dados do formulário
    var templateParams = {
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        mensagem: document.getElementById('mensagem').value
    };

    // Envia o e-mail usando EmailJS
    emailjs.send('service_0s2ovdl', 'template_filj7fr', templateParams)
        .then(function(response) {
            alert('Mensagem enviada com sucesso!', response.status, response.text);
        }, function(error) {
            alert('Erro ao enviar mensagem, tente novamente.', error);
        });
});
