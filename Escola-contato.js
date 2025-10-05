const formulario = document.getElementById('contact-form');
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Mensagem enviada com sucesso!');
    formulario.reset(); 
});

