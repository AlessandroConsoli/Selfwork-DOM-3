let time = document.querySelector('#input1');
let customBtn = document.querySelector('custom-Btn');
let contatore = document.querySelector('contatore');



customBtn.addEventListener('click', (valore)=>{
    function countDown() {
        for (let i = 0; i > 0; i--) {
            console.log(i);
            valore.countDown();
            contatore.innerHTML = i;        
        }
    }
});




