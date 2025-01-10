let inputCode = ""; // Armazena o código digitado
const screen = document.getElementById('screen');

// Função para adicionar números ao input
function pressKey(num) {
  if (inputCode.length < 4) { // Limita a 4 dígitos
    inputCode += num;
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
  screen.textContent = inputCode.padEnd(4, '*'); // Preenche com * até 4 caracteres
}

// Função para verificar o código
function submitCode() {
  switch (inputCode) {
    case "3580":
      window.location.href = "erro1635.html"; // Muda para outra página
      break;
    default:
      playSound('audio/error.mp3');
      break;
  }
  clearInput();
}

// Função para reproduzir vídeo
function playVideo(vide) {
  const video = document.createElement('video');
  video.src = vide; // Caminho do vídeo
  video.controls = true;
  video.autoplay = true;
  video.style.position = 'fixed';
  video.style.top = '75px';
  video.style.left = '90px';
  video.style.transform = 'translate(-5px, -75px)';
  video.style.zIndex = '1000';
  video.style.width = '80vw'; // Define largura como 80% da tela
  video.style.height = 'auto'; // Mantém proporção automática
  document.body.appendChild(video);
  }