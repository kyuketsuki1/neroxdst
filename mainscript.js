window.onload = function() {
    // Elementos principais
    let video = document.getElementById('main-loop');
    let music = document.getElementById('specialist');
    let muteButton = document.getElementById('mute-button');
    let unmuteButton = document.getElementById('unmute-button');
    let volumeSlider = document.getElementById('volume-slider');
    let textElements = document.querySelectorAll('.fade-in'); 
    let gifElement = document.querySelector('.gif'); 

    // Toca a música em modo mudo inicialmente
    music.play().catch(error => {
        console.error("Erro ao tentar tocar a música:", error);
    });

    // Mostra os textos e o GIF com efeito de fade-in
    setTimeout(() => {
        textElements.forEach((text, index) => {
            setTimeout(() => {
                text.classList.add('show'); 
            }, index * 500); 
        });

        setTimeout(() => {
            gifElement.classList.add('show');
            gifElement.style.display = 'block'; 
        }, textElements.length * 500 + 1500); 
    }, 1500);

    // Controle de mute/unmute da música
    let isMuted = true;
    muteButton.onclick = function() {
        isMuted = !isMuted;
        music.volume = isMuted ? 0 : volumeSlider.value;
        muteButton.textContent = isMuted ? '🔇' : '🔊';
    };

    unmuteButton.onclick = function() {
        music.muted = false;
        music.play().catch(error => {
            console.error("Erro ao tentar tocar a música:", error);
        });
        unmuteButton.style.display = 'none';
        volumeSlider.style.display = 'inline-block';
    };

    // Slider de volume
    volumeSlider.oninput = function() {
        music.volume = volumeSlider.value;
    };

    // Aparecer os cards dos projetos após 2.5 segundos
    setTimeout(() => {
        document.querySelectorAll('.card').forEach(card => {
            card.classList.add('show');
        });
    }, 2500);
};
