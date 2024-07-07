const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function() {
    $('#enviarCorreo').click(function() {
        alert('El correo fue enviado correctamente...');
    });

    $('h5:contains("INGREDIENTES")').on('dblclick', function() {
        $(this).css('color', 'red');
    });

    $('h5:contains("PREPARACION")').on('dblclick', function() {
        $(this).css('color', 'red');
    });

    $('.card-title').click(function() {
        $(this).siblings('.card-text').toggle();
    });
});