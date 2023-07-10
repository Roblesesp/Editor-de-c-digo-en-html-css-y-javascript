var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true, // Mostrar números de línea
    mode: "javascript" // Establecer el lenguaje de programación
  });

  // Obtener los botones, el select, el input de nombre del archivo, el input de archivo a cargar y el iframe
  var saveButton = document.getElementById("save-button");
  var fileFormatSelect = document.getElementById("file-format");
  var fileNameInput = document.getElementById("file-name");
  var fileInput = document.getElementById("file-input");
  var loadButton = document.getElementById("load-button");
  var showResultButton = document.getElementById("show-result-button");
  var resultFrame = document.getElementById("result");

  // Agregar un evento de click al botón de guardar
  saveButton.addEventListener("click", function() {
    // Obtener el contenido del editor, el formato seleccionado y el nombre del archivo
    var content = editor.getValue();
    var format = fileFormatSelect.value;
    var fileName = fileNameInput.value;

    // Crear un objeto Blob con el contenido del archivo
    var blob = new Blob([content], { type: "text/" + format });

    // Usar la librería FileSaver.js para guardar el archivo
    saveAs(blob, fileName + "." + format);
  });
  // Agregar un evento de click al botón de cargar
  loadButton.addEventListener("click", function() {
    // Obtener el archivo seleccionado
    var file = fileInput.files[0];
    if (!file) {      alert("Por favor seleccione un archivo para cargar");
      return;
    }

    // Leer el archivo con FileReader
    var reader = new FileReader();
    reader.onload = function() {
      // Establecer el contenido del editor con el contenido del archivo
      editor.setValue(reader.result);
    };
    reader.readAsText(file);
  });

  // Agregar un evento de click al botón de mostrar resultado
  showResultButton.addEventListener("click", function() {
    // Establecer el contenido del iframe con el contenido del editor
    resultFrame.srcdoc = editor.getValue();
  });
