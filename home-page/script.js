window.onload = function() {
    let video = document.getElementById('intro');
    let content = document.querySelector('.content');
    let music = document.getElementById('cyn');
    let muteButton = document.getElementById('mute-button');
    let unmuteButton = document.getElementById('unmute-button');
    let volumeSlider = document.getElementById('volume-slider'); // Slider de volume

    // Toca a música em modo mudo
    music.play().catch(error => {
        console.error("Erro ao tentar tocar a música:", error);
    });

    // Define a opacidade do conteúdo após 3 segundos
    setTimeout(function() {
        content.style.opacity = 1;
    }, 3000);

    // Lida com o final do vídeo
    video.onended = function() {
        video.src = 'https://github.com/kyuketsuki1/neroxdst/raw/refs/heads/main/media/loop.mp4';  // Troca a fonte do vídeo
        video.load();             // Carrega o novo vídeo
        video.play();             // Toca o novo vídeo
    };

    // Controle de mutar/desmutar a música
    let isMuted = true; // Estado inicial de mutar

    muteButton.onclick = function() {
        isMuted = !isMuted; // Alterna o estado

        if (isMuted) {
            music.volume = 0; // Muta a música
            muteButton.textContent = '🔇'; // Muda para ícone de mudo
        } else {
            music.volume = volumeSlider.value; // Ativa o som no nível do slider
            muteButton.textContent = '🔊'; // Muda para ícone de som
        }
    };

    // Adiciona um evento ao botão de Unmute
    unmuteButton.onclick = function() {
        music.muted = false; // Desmuta a música
        music.play().catch(error => {
            console.error("Erro ao tentar tocar a música:", error);
        });
        unmuteButton.style.display = 'none'; // Esconde o botão de Unmute
        volumeSlider.style.display = 'inline-block'; // Exibe o slider de volume
    };

    // Evento para ajustar o volume pelo slider
    volumeSlider.oninput = function() {
        music.volume = volumeSlider.value; // Define o volume de acordo com o valor do slider
    };
};
