const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.getElementById('btnTry')
const btnRestart = document.getElementById('btnRestart')
let  typedNumber = document.getElementById('typedNumber')
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

btnTry.addEventListener('click', handleTryClick)
btnRestart.addEventListener('click', handleRestartClick)

function handleTryClick(e) {
    e.preventDefault()
    
    if (Number(typedNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector('h2').innerHTML = `Voce acertou em ${attempts} tentativas`
    }

    typedNumber.value = ''
    
    attempts++
}

function handleRestartClick(e) {
    e.preventDefault()

    toggleScreen()

    randomNumber = Math.round(Math.random() * 10)
    attempts = 1

    typedNumber.value = ''
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}