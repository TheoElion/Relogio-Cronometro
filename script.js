/********RELOGIO********/

const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function tempo() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let sec = dateToday.getSeconds()

    if(hr < 10) hr = '0' + hr

    if(min < 10) min = '0' + min
  
    if(sec < 10) sec = '0' + sec

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec
})


/***********CRONOMETRO***********/

const minutosCrono = document.getElementById('minutos-cornometro')
const segundosCrono = document.getElementById('segundos-cornometro')
const milissegundosCrono = document.getElementById('milissegundos-cornometro')
const startBtn = document.getElementById('startBtn')
const pauseBtn = document.getElementById('pauseBtn')
const resumeBtn = document.getElementById('resumeBtn')
const resetBtn = document.getElementById('resetBtn')

let interval
let cronoMin = 0
let cronoSec = 0
let cronoMili = 0
let isPaused = false

startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
resumeBtn.addEventListener('click', resumeTimer)
resetBtn.addEventListener('click', resetTimer)

function startTimer() {
    interval = setInterval(() => {

      if(!isPaused) {
            cronoMili += 10

            if(cronoMili === 1000) {
                cronoSec++
                cronoMili = 0
            }

            if(cronoSec === 60) {
                cronoMin++
                cronoSec = 0
            }

            minutosCrono.textContent = formatTime(cronoMin)
            segundosCrono.textContent = formatTime(cronoSec)
            milissegundosCrono.textContent = formatMilisegundos(cronoMili)
        }

    }, 10)

    startBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}

function pauseTimer() {
    isPaused = true
    resumeBtn.style.display = 'block'
    pauseBtn.style.display = 'none'
}

function resumeTimer() {
    isPaused = false
    resumeBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}

function resetTimer() {
    clearInterval(interval)
    cronoMili = 0
    cronoMin = 0
    cronoSec = 0

    isPaused = false

    minutosCrono.textContent = '00'
    segundosCrono.textContent = '00'
    milissegundosCrono.textContent = '000'

    startBtn.style.display = 'block'
    resumeBtn.style.display = 'none'
    pauseBtn.style.display = 'none'
}

function formatTime(time) {
    return time <10 ? `0${time}` : time
}

function formatMilisegundos(time) {
    return time <100 ? `${time}`.padStart(3, '0') : time
}