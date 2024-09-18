let remainingTime = document.querySelector('#remainingTime');
let countDownInput = document.querySelector('#countDownInput');
let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let resetBtn = document.querySelector('#resetBtn');

let interval;
let counter;
let remainingSeconds = 0;


// PULSANTI:

// START
startBtn.addEventListener('click', ()=>{
    clearInterval(interval);
    counter = countDownInput.value;    //<=== Valore inserito dall'utente
    

    while (countDownInput.value > 300) {
        clearInterval(interval)
        alert(`Ho un impegno per Natale! \nPer favore inserisci un valore non superiore a 300 sec!`)
        remainingTime.innerHTML = `Valore non consentito`;   
        counter = '';
        break;
    }


    if (remainingSeconds !== 0){
        counter = remainingSeconds;
    }

    interval = setInterval( ()=>{
        if (counter < 0) {
            clearInterval(interval)
            remainingTime.innerHTML = `Tempo scaduto!`
        }else{
            remainingTime.innerHTML = counter
            counter --
        }
    }, 1000);
})


// STOP
stopBtn.addEventListener('click', ()=>{
    clearInterval(interval);
    remainingSeconds = counter;
})


//  RESET
resetBtn.addEventListener('click', ()=>{
    countDownInput.value = ``;
    clearInterval(interval)
    remainingTime.innerHTML = ``;
    remainingSeconds = 0;
})






