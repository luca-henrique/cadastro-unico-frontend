var filterNumber = function(event) {
  return (
    (event.charCode >= 48 && event.charCode <= 57) ||
    event.keyCode == 45 ||
    event.charCode == 46
  );
};

function filterText(texto) {
  var tecla = texto.which || texto.keyCode;

  if ((tecla >= 97 && tecla <= 117) || tecla === 8) {
    return texto.target.value;
  }
}
