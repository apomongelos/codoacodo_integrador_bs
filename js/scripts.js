let total = document.getElementById('total');
let alert_total = document.getElementById('alert-total');

function showAlertTotal() {
  if (total.value != undefined && total.value !== '') {
    alert_total.style.display = 'block';
  } else {
    alert_total.style.display = 'none';
  }
}

let formulario = document.getElementById('form_ticket');

showAlertTotal();

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  const nombre = formulario[0].value;
  const apellido = formulario[1].value;
  const email = formulario[2].value;
  const cantidad = formulario[3].value;
  const categoria = formulario[4].value;
  if (
    nombre === '' ||
    apellido === '' ||
    email === '' ||
    cantidad === '' ||
    categoria === ''
  ) {
    mostrarMensaje('Alguno de los campos no se completó.');
    return;
  }

  if (isNaN(Number(cantidad))) {
    mostrarMensaje('Debe ingresar un valor numerico en el campo cantidad');
  } else {
    if (categoria === 'estudiante') {
      total.innerHTML = cantidad * (200 - 200 * 0.8);
      total.value = cantidad * (200 - 200 * 0.8);
      showAlertTotal();
    } else if (categoria === 'trainee') {
      total.innerHTML = cantidad * (200 - 200 * 0.5);
      total.value = cantidad * (200 - 200 * 0.5);
      showAlertTotal();
    } else if (categoria === 'junior') {
      total.innerHTML = cantidad * (200 - 200 * 0.15);
      total.value = cantidad * (200 - 200 * 0.15);
      showAlertTotal();
    } else {
      total.innerHTML = cantidad * 200;
      total.value = cantidad * 200;
      showAlertTotal();
    }
  }
});

formulario.addEventListener('reset', function (event) {
  // console.log(event.timeStamp);
  total.innerHTML = '';
  total.value = '';
  showAlertTotal();
});

function mostrarMensaje(mensaje) {
  alert(mensaje);
}
