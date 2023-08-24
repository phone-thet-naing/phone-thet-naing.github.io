"use strict";

// variable setup
let startTime
let timerId
let pausedTimeInterval = 0
let displayPauseBtn = false

// DOM objects
const btnStart = document.getElementById("start")
const btnStop = document.getElementById("stop")
const btnReset = document.getElementById("reset")
const display = document.getElementById("display")
const minuteDisplay = document.getElementById("minute")
const secondDisplay = document.getElementById("second")
const milliSecondDisplay = document.getElementById("millisecond")

// event handlers
btnStart.addEventListener("click", startTimer)
btnStop.addEventListener("click", stopTimer)
btnReset.addEventListener("click", resetTimer)


function startTimer() {
    displayPauseBtn = true
    // if (displayPauseBtn) {
    //     document.body.classList.remove("light-background")
    //     document.body.classList.add("dark-background")
    // }

    if (!timerId) {
        startTime = new Date().getTime() - pausedTimeInterval
        console.log({
            "startTime": new Date(startTime),
            "timerId": timerId
        })
        timerId = setInterval(updateTimer, 1)
    }
}

function stopTimer() {
    displayPauseBtn = false
    // if (!displayPauseBtn) {
    //     document.body.classList.remove("dark-background")
    //     document.body.classList.add("light-background")
    // }
    if (!timerId)
        return
    clearInterval(timerId)
    pausedTimeInterval = new Date().getTime() - startTime
    console.log({
        "timeInterval": timerId,
        "pausedTimeInterval": Math.floor(pausedTimeInterval / 1000)
    })
    timerId = null
}

function resetTimer() {
    displayPauseBtn = false
    // if (!displayPauseBtn) {
    //     document.body.classList.remove("dark-background")
    //     document.body.classList.add("light-background")
    // }
    stopTimer()
    pausedTimeInterval = 0
    minuteDisplay.innerHTML = "00"
    secondDisplay.innerHTML = "00"
    milliSecondDisplay.innerHTML = "00"
}

function updateTimer() {
    let milliSecondsElapsed = new Date().getTime() - startTime
    let secondsElapsed = milliSecondsElapsed / 1000
    let minutesElapsed = secondsElapsed / 60
    // let hoursElapsed = minutesElapsed / 60
    // let daysElapsed = minutesElapsed / 24

    let milliSecondsText = formatNumber(milliSecondsElapsed % 1000, 2)
    let secondsText = formatNumber(Math.floor(secondsElapsed) % 60, 2)
    let minutesText = formatNumber(Math.floor(minutesElapsed), 2)
    // let hoursText = formatNumber(Math.floor(hoursElapsed), 2)
    // let daysText = Math.floor(daysElapsed)
    // display.innerHTML = `${minutesText}:${secondsText}:${milliSecondsText}`
    minuteDisplay.innerHTML = minutesText
    secondDisplay.innerHTML = secondsText
    milliSecondDisplay.innerHTML = milliSecondsText
}

function formatNumber(originalNumber, desiredLength) {
    let stringNumber = String(originalNumber)

    if (stringNumber.length > desiredLength) {
        return stringNumber.slice(0, desiredLength)
    }

    return stringNumber.padStart(desiredLength, "0")
}