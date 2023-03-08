const secondHandEl = document.querySelector(".hand.second-hand");
const minHandEl = document.querySelector(".min-hand");
const hourHandEl = document.querySelector(".hour-hand");
let start_time;
const currentTime = new Date();
let hour = currentTime.getHours();
let min = currentTime.getMinutes();
let second = currentTime.getSeconds();



// console.log(secondHandEl);

function renderHand(hands, vals) {
    hands.forEach(function(hand, i) {
        let deg = (vals[i] * 6) + 90;
        hand.style.cssText = `transform: rotate(${deg}deg)`;
    });
    
}

function updateClock(time) {
    // console.log(time);
    if (!start_time) {
        start_time = time;
        // second = 0;
    }

    let ellapse_time = Math.floor(time - start_time);
    
    if(ellapse_time >= 1000) {
        start_time = time;
        second++;
    }

    if(second == 60) {
        min = min + 1;
        second = 0;
    }

    if(min == 60) {
        hour = hour + 1;
        min = 0;
    }

    renderHand([secondHandEl, minHandEl, hourHandEl], [second, min, hour]);
    console.log(`${hour} : ${min} : ${second}`);


    requestAnimationFrame(updateClock);
}

requestAnimationFrame(updateClock);