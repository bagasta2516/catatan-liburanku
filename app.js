const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');
let notes = JSON.parse(localStorage.getItem('catatanLiburan') || '[]');

function save() { localStorage.setItem('catatanLiburan', JSON.stringify(notes)); }

function render() {
  list.innerHTML = '';
  notes.forEach((text, i) => {
    const li = document.createElement('li');
    li.textContent = text;
    const del = document.createElement('button');
    del.textContent = 'Hapus';
    del.onclick = () => { notes.splice(i, 1); save(); render(); };
    li.appendChild(del);
    list.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  notes.push(input.value.trim());
  input.value = '';
  save();
  render();
});

render();
