const form = document.getElementById('form');
const log = document.getElementById('log');

function logData(event) {
  event.preventDefault();
  const formData = new FormData(form);

  const n1 = Number(formData.get('n1'));
  const n2 = Number(formData.get('n2'));
  const n3 = Number(formData.get('n3'));
  const n4 = Number(formData.get('n4'));
  const n5 = Number(formData.get('n5'));

  const h1 = Number(formData.get('h1'));
  const h2 = Number(formData.get('h2'));
  const h3 = Number(formData.get('h3'));
  const h4 = Number(formData.get('h4'));
  const h5 = Number(formData.get('h5'));

  const have = n1 + n2 * 3 + n3 * 9 + n4 * 27 + n5 * 27 * 3;
  const need = h1 + h2 * 3 + h3 * 9 + h4 * 27 + h5 * 27 * 3;

  const res = (have * 100) / need;

  log.textContent = `У вас есть ${Math.floor(res)} % необходимых материалов`;
}

form.addEventListener('submit', logData);
