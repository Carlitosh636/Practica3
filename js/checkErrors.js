$(document).ready(function(e) {
	$('#postForm').submit(function() {
		$('#errors').html('');
		if(($('#destinatario').val() !== '') && ($('#direccion').val() !== '')){
			return true;
		}
		if ($('#destinatario').val() === '') {
			$('#errors').append('<p>Por favor, introduzca un destinatario (Ej: Juan) </p>');
		} 
		if ($('#direccion').val() === '') {
			$('#errors').append('<p>Por favor, introduzca una dirección de envío (Ej: C/San Juan Nº3 28001, Madrid)</p>');
		} 
		return false;
	});
});