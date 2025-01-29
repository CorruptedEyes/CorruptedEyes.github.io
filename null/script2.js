let inputCode = ""; // Armazena o código digitado
const screen = document.getElementById('screen');
const message = document.getElementById('message');

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
      playSound('audio/silvermoon.mp3'); // Toca som
      message.textContent = "'' s i l v e r m o o n '' _ i s s o _ m e _ é _ f a m i l i a r . . .";
      break;
    case "DUAS_CARAS":
      // Nada por enquanto
      message.textContent = "p o b r e s _ m e n i n o s . . .";
      break;
    case "A_FENDA":
      // Nada por enquanto
      message.textContent = "e u _ s o u _ a _ e n t i d a d e _ q u e _ e x i s t e _ n o _ p a s s a d o , p r e s e n t e _ e _ f u t u r o . . .";
      break;
    case "CORRUPCAO":
      // Nada por enquanto
      message.textContent = "m i n h a _ p e q u e n a _ A n n a . . . e _ m e u _ p e q u e n o _ [ CONFIDENCIAL ]";
      break;
    case "4133135212":
      playSound('audio/ovoscorroidos.mp3'); // Toca som
      message.textContent = "O l h o s _ C o r r o m p i d o s _ ? _ O q u e . . . é _ i s s o _ ?";
      break;
    case "DRA.EMILLY":
      playSound('audio/dra.emilly.ogg'); // Toca som
      message.textContent = "N ã o _ e x i s t e . . . S o m o s _ u m _ u n i c o _ s e r _ a g o r a . . . p a r e _ d e _ t e n t a r _ n o s _ s e p a r a r . . .";
      break;
    case "DR.LUIS":
      playVideo('video/socorro.mp4');
      message.textContent = "S i n t o _ s a u d a d e s . . . m a s _ d e v e _ s e g u i r _ e m _ f r e n t e . . . s e m _ m i m _ a o _ s e u _ l a d o . . .";
      break;
    case "9753":
      playVideo('video/prototipo_9753.mp4');
      message.textContent = "'' O _ p r o t o t i p o '' . . . O q u e _ f i z e r a m _ c o m _ v o c ê _ ? . . .";
      break;
    default:
      playSound('audio/error.mp3');
      message.textContent = "";
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