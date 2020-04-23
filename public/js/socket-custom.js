var socket = io()

socket.on('connect', function() {

    console.log('Conectado al servidor')

})

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor')

})

//Enviar informarcion
socket.emit('enviarMensaje', {
    //usuario: 'Ruben',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
})

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);
})