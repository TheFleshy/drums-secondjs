let crashRide = document.querySelector('#crash-ride');
let hiHatTop = document.querySelector('#hihat-top');



const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(-13deg) scale(1.5)';
}

animateCrashOrRidee = () => {
    crashRide.style.transform = 'rotate(3deg) scale(1.5)';
}


const animateHiHatClosed = () => {
    hiHatTop.style.top = '171px ';
}

window.addEventListener("keydown", (event) =>{
    let code = event.keyCode;
    let keyElement = document.querySelector(`div[data-key="${code}"]`);

    if(!keyElement) return;

    let audio = document.querySelector(`audio[data-key="${code}"]`);
    audio.currentTime = 0;
    audio.play();

    switch(code) {
        case 69:
            animateCrashOrRide();
            break;
        case 82:
            animateCrashOrRidee();
            break;
        case 75:
        case 73:
            animateHiHatClosed ();
            break;
    }
    keyElement.classList.add('playing'); 

});

const removeCrashRideTransition = e => {
    if (e.propertyName !== 'transform') return;

    crashRide.style.transform = 'rotate(-7.2deg) scale(1.5)';

}

const removeHiHatTopTransition = e => {
    if (e.propertyName !== 'top') return;
    
    e.target.style.top = '166px';
}

const removeKeyTransition = e => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove ('playing');
}

let drumKeys = document.querySelectorAll('.key');

drumKeys.forEach(key => {
    key.addEventListener("transitionend", removeKeyTransition)
    
});
crashRide.addEventListener ("transitionend" , removeCrashRideTransition);
hiHatTop.addEventListener ("transitionend" , removeHiHatTopTransition);