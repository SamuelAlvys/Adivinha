//Variables
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset =  document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

//Events
btnTry.addEventListener('click', handleTryClick) 
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keyEnterDown)

//Functions 
function handleTryClick(event) {
  event.preventDefault()
  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0) {
    alert("Digite um número entre 0 e 10")
    xAttempts = 1
    inputNumber.value = ''
  }else {
    if(Number(inputNumber.value) == randomNumber) {
      toggleScreen()
  
      screen2.querySelector("h2").innerText =  `Você acertou em ${xAttempts} tentativas`
    }
  
    inputNumber.value = ''
    xAttempts++
  }
}

function handleResetClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
  inputNumber.focus()
  xAttempts = 0
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function keyEnterDown(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}