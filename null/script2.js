let inputCode = ""; // Armazena o código digitado
const screen = document.getElementById('screen');

// Função para adicionar letras e números ao input
function pressKey(char) {
  if (inputCode.length < 10) { // Limita a 10 caracteres
    inputCode += char;
    updateScreen();
  }
}

// Função para limpar o input
function clearInput() {
  inputCode = "";
  updateScreen();
}

// Atualiza a tela
function updateScreen() {
  const paddedInput = inputCode.padEnd(10, '_'); // Preenche com _ até 10 caracteres
  screen.textContent = paddedInput.split('').join(' '); // Exibe com espaços entre os caracteres
}

// Função para verificar o código
function submitCode() {
  switch (inputCode) {
    case "SILVERMOON":
      // Nada por enquanto
      break;
    case "DUAS_CARAS":
      // Nada por enquanto
      break;
    case "A_FENDA":
      // Nada por enquanto
      break;
    case "CORRUPCAO":
      // Nada por enquanto
      break;
    case "4133135212":
      playSound('audio/ovoscorroidos.mp3'); // Toca som
      break;
    case "DRA.EMILLY":
      playSound('audio/dra.emilly.ogg'); // Toca som
      break;
    case "DR.LUIS":
      playVideo('video/socorro.mp4');
      break;
    case "9753":
      playVideo('video/prototipo_9753.mp4');
      break;
    default:
      playSound('audio/error.mp3');
      break;
  }
  clearInput();
}

// Função para reproduzir vídeo
function playVideo(vide) {
  const video = document.getElementById("teve");
  video.src = vide; // Caminho do vídeo
  video.controls = true;
  video.autoplay = true;
  video.style.top = '140px';
  video.style.left = '90px';
  video.style.zIndex = '1000';
  video.style.width = '80vw'; // Define largura como 80% da tela
  video.style.height = 'auto'; // Mantém proporção automática
}

// Função para reproduzir som
function playSound(sound) {
  const audio = new Audio(sound);
  audio.play();
}