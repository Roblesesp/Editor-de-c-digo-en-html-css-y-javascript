 const inputFile = document.getElementById('file-input');
const inputLabel = document.querySelector('.input-file-label');

inputLabel.addEventListener('click', () => {
  inputFile.click();
});

inputFile.addEventListener('change', () => {
  const files = inputFile.files;
  if (files.length > 0) {
    const fileName = files[0].name;
    inputLabel.textContent = fileName;
  }
});