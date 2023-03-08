document.addEventListener('keydown', function(e) {
    // console.log(e.key);
    const audio_el = document.querySelector(`audio[data-key="${e.key}"]`);
    const key_el = document.querySelector(`div.key[data-key="${e.key}"]`);
    key_el.classList.add('playing');
    console.log(audio_el);
    audio_el.currentTime = 0;
    audio_el.play();
    setTimeout(function(){
        key_el.classList.remove("playing");
    }, 100);
});

// document.addEventListener('keydown', function(e) {
//     const key_el = document.querySelector(`div.key[data-key="${e.key}"]`);
//     key_el.classList.remove("playing");
// });