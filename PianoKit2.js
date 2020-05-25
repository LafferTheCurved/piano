const keys = ["z", "s", "x", "d", "c", "v", "g", "b", "h", "n", "j", "m"];

const pianoKeys = document.querySelectorAll('.key')


document.addEventListener('keydown', e =>{
    const key = e.key
    const pianoKeysIndex = keys.indexOf(key)

    if (pianoKeysIndex > -1) playSound(pianoKeys[pianoKeysIndex])
}
);

function playSound(key) {
    const audio = document.getElementById(key.dataset.note);
    if(!audio) return;
    audio.currentTime= 0;
    audio.play();
    key.classList.add('active')
    audio.addEventListener('ended', () => {
      key.classList.remove('active')
    })
}



