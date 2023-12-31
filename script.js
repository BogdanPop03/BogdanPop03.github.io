"use strict"

// Modal

// const modal = document.querySelector(".modal")

const modal1 = document.getElementById("modal--1")
const modal2 = document.getElementById("modal--2")
const modal3 = document.getElementById("modal--3")

const overlay = document.querySelector(".overlay")
// const btnCloseModal = document.querySelector(".close-modal")

const btnCloseModal1 = document.getElementById("close-modal-1")
const btnCloseModal2 = document.getElementById("close-modal-2")
const btnCloseModal3 = document.getElementById("close-modal-3")

const btnsOpenModal = document.querySelectorAll(".show-modal")

const btn1 = document.getElementById("btn--1")
const btn2 = document.getElementById("btn--2")
const btn3 = document.getElementById("btn--3")

const openModal1 = function () {
	modal1.classList.remove("hidden")
	overlay.classList.remove("hidden")

	console.log("Modal 1 was opened.")
}

const openModal2 = function () {
	modal2.classList.remove("hidden")
	overlay.classList.remove("hidden")

	console.log("Modal 2 was opened.")
}

const openModal3 = function () {
	modal3.classList.remove("hidden")
	overlay.classList.remove("hidden")

	console.log("Modal 3 was opened.")
}

const closeModal = function () {
	if (!modal1.classList.contains("hidden")) {
		modal1.classList.add("hidden")
	} else if (!modal2.classList.contains("hidden")) {
		modal2.classList.add("hidden")
	} else {
		modal3.classList.add("hidden")
	}
	overlay.classList.add("hidden")

	console.log("Modal was closed.")
}

// for (let i = 0; i <= btnsOpenModal.length; i++) {
// 	btnsOpenModal[i].addEventListener("click", openModal)

// 	btnCloseModal.addEventListener("click", closeModal)
// 	overlay.addEventListener("click", closeModal)
// 	document.addEventListener("keydown", function (event) {
// 		console.log(event)

// 		const key = event.key

// 		if (key === "Escape") {
// 			if (!modal.classList.contains("hidden")) closeModal()
// 		}
// 	})
// }

btn1.addEventListener("click", openModal1)
btn2.addEventListener("click", openModal2)
btn3.addEventListener("click", openModal3)

btnCloseModal1.addEventListener("click", closeModal)
btnCloseModal2.addEventListener("click", closeModal)
btnCloseModal3.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

document.addEventListener("keydown", function (event) {
	console.log(event)

	const key = event.key

	console.log(`The ${key} was pressed.`)

	if (key === "Escape") {
		if (!modal1.classList.contains("hidden")) closeModal()
		else if (!modal2.classList.contains("hidden")) closeModal()
		else closeModal()
	}
})

// Guess my number

const randomValue = () => Math.trunc(Math.random() * 20) + 1

let valueToGuess = randomValue()

let highscore = 0

console.log(`Highscore: ${highscore}`)

console.log(`The value to guess is: ${valueToGuess}`)

// checking the guess
document.querySelector(".check--gmn").addEventListener("click", function () {
	console.log(document.querySelector(".guess--gmn").value)

	const guessedValue = document.querySelector(".guess--gmn").value

	// number is outside of the range
	if (Number(guessedValue) < 1 || Number(guessedValue) > 20) {
		document.querySelector(".message--gmn").textContent =
			"Number is outside of the range!"
	}
	// number is higher than the value to be guessed
	else if (Number(guessedValue) > valueToGuess) {
		document.querySelector(".message--gmn").textContent = "Try lower..."
	}
	// number is lower than the value to be guessed
	else if (Number(guessedValue) < valueToGuess) {
		document.querySelector(".message--gmn").textContent = "Try higher..."
	}

	// the number was found
	if (guessedValue === String(valueToGuess)) {
		document.querySelector(".message--gmn").textContent = "Correct number!"

		// the highscore gets changed
		if (
			Number(document.getElementById("score--gmn").textContent) >
			highscore
		) {
			highscore = Number(
				document.getElementById("score--gmn").textContent
			)

			console.log(`Highscore: ${highscore}`)

			document.querySelector(".highscore--gmn").textContent = Number(
				document.getElementById("score--gmn").textContent
			)
		}

		document.querySelector(".number--gmn").textContent =
			String(valueToGuess)
		document.querySelector(".number--gmn").style.width = "20rem"

		// the body becomes green
		// document.querySelector("body").style.backgroundColor = "green"
		document.querySelector(".header--gmn").style.backgroundColor = "green"
		document.querySelector(".main--gmn").style.backgroundColor = "green"
	}
	// the number was not found
	else {
		document.getElementById("score--gmn").textContent = String(
			Number(document.getElementById("score--gmn").textContent) - 1
		)
	}
})

// Reseting the page
document.querySelector(".again--gmn").addEventListener("click", function () {
	document.querySelector(".message--gmn").textContent = "Start guessing..."
	document.querySelector(".guess--gmn").value = ""
	document.getElementById("score--gmn").textContent = 20
	valueToGuess = randomValue()
	document.querySelector(".number--gmn").textContent = "?"
	// document.querySelector("body").style.backgroundColor = "#222"

	document.querySelector(".header--gmn").style.backgroundColor = "#222"
	document.querySelector(".main--gmn").style.backgroundColor = "#222"
	document.querySelector(".number--gmn").style.width = "15rem"

	console.log(`The value to guess is: ${valueToGuess}`)
})

// Dice rolling game

const newGame = function () {
	score0Element.textContent = 0
	score1Element.textContent = 0

	currentScoreLeft.textContent = 0
	currentScoreRight.textContent = 0

	playerLeftScore.textContent = "Score: 0"
	playerRightScore.textContent = "Score: 0"

	diceElement.classList.add("hidden")

	if (!playerLeftStatus.classList.contains("player--drg--active")) {
		playerLeftStatus.classList.add("player--drg--active")
		playerRightStatus.classList.remove("player--drg--active")
	}

	console.log("Game was reset.")
}

const score0Element = document.getElementById("score--0")
const score1Element = document.getElementById("score--1")

const currentScoreLeft = document.getElementById("current--0")
const currentScoreRight = document.getElementById("current--1")

const diceElement = document.querySelector(".dice--drg")

const btnNew = document.querySelector(".btn--drg--new")
const btnRoll = document.querySelector(".btn--drg--roll")
const btnHold = document.querySelector(".btn--drg--hold")

const playerLeftStatus = document.querySelector(".player--0")
const playerRightStatus = document.querySelector(".player--1")

const playerLeftScore = document.getElementById("player--left--score")
const playerRightScore = document.getElementById("player--right--score")

score0Element.textContent = 0
score1Element.textContent = 0

diceElement.classList.add("hidden")

btnNew.addEventListener("click", newGame)

btnRoll.addEventListener("click", function () {
	const diceValue = Math.trunc(Math.random() * 6) + 1

	console.log(`First dice value: ${diceValue}.`)

	const imageName = "dice-" + String(diceValue) + ".png"

	diceElement.src = imageName

	diceElement.classList.remove("hidden")

	if (diceValue === 1) {
		if (playerLeftStatus.classList.contains("player--drg--active")) {
			console.log("Switched from Player Left to Player Right.")

			currentScoreLeft.textContent = 0

			playerLeftStatus.classList.remove("player--drg--active")
			playerRightStatus.classList.add("player--drg--active")
		} else {
			console.log("Switched from Player Right to Player Left.")

			currentScoreRight.textContent = 0

			playerRightStatus.classList.remove("player--drg--active")
			playerLeftStatus.classList.add("player--drg--active")
		}
	} else {
		if (playerLeftStatus.classList.contains("player--drg--active")) {
			currentScoreLeft.textContent =
				Number(currentScoreLeft.textContent) + Number(diceValue)
		} else if (
			playerRightStatus.classList.contains("player--drg--active")
		) {
			currentScoreRight.textContent =
				Number(currentScoreRight.textContent) + Number(diceValue)
		}
	}
})

btnHold.addEventListener("click", function () {
	diceElement.classList.add("hidden")

	if (playerLeftStatus.classList.contains("player--drg--active")) {
		console.log("Switched from Player Left to Player Right.")

		score0Element.textContent =
			Number(score0Element.textContent) +
			Number(currentScoreLeft.textContent)

		if (Number(score0Element.textContent) >= 100) {
			const scoreLeft =
				Number(playerLeftScore.textContent.match(/:\s(\d+)/)[1]) + 1

			score0Element.textContent = 0

			playerLeftScore.textContent = `Score: ${scoreLeft}`

			console.log(`Score Player Left: ${scoreLeft}.`)

			// newGame()
		}

		playerLeftStatus.classList.remove("player--drg--active")
		playerRightStatus.classList.add("player--drg--active")

		console.log(
			`Player left held ${currentScoreLeft.textContent} points and now has ${score0Element.textContent} points in total.`
		)
	} else {
		console.log("Switched from Player Right to Player Left.")

		score1Element.textContent =
			Number(score1Element.textContent) +
			Number(currentScoreRight.textContent)

		if (Number(score1Element.textContent) >= 100) {
			const scoreRight =
				Number(playerRightScore.textContent.match(/:\s(\d+)/)[1]) + 1

			score1Element.textContent = 0

			playerRightScore.textContent = `Score: ${scoreRight}`

			console.log(`Score Player Right: ${scoreRight}.`)

			// newGame()
		}

		playerRightStatus.classList.remove("player--drg--active")
		playerLeftStatus.classList.add("player--drg--active")

		console.log(
			`Player right held ${currentScoreRight.textContent} points and now has ${score1Element.textContent} points in total.`
		)
	}

	currentScoreLeft.textContent = 0
	currentScoreRight.textContent = 0
})

// Rock paper scissors

const btnRock = document.getElementById("btn--rock")
const btnPaper = document.getElementById("btn--paper")
const btnScissors = document.getElementById("btn--scissors")
const btnAgain = document.getElementById("btn--again")

const scoreRpsYou = document.getElementById("score--rps--you")
const scoreRpsComputer = document.getElementById("score--rps--computer")
const playerChoice = document.getElementById("choice--rps")

const leftImg = document.getElementById("image--left")
const ritghImg = document.getElementById("image--right")
const centerVsImg = document.getElementById("image--center--vs")
const centerWonImg = document.getElementById("image--center--won")
const centerTieImg = document.getElementById("image--center--tie")
const centerLostImg = document.getElementById("image--center--lost")

const randomChoice = () => Math.trunc(Math.random() * 3) + 1

const rightImgChoice = function () {
	const computerChoice = randomChoice()

	if (computerChoice === 1) return "rock"
	else if (computerChoice === 2) return "paper"
	else return "scissors"
}

const winCondition = function (left, right) {
	if (left === "rock" && right === "scissors") return "won"
	else if (left === "rock" && right === "paper") return "lost"
	else if (left === "rock" && right === "rock") return "tie"

	if (left === "paper" && right === "rock") return "won"
	else if (left === "paper" && right === "scissors") return "lost"
	else if (left === "paper" && right === "paper") return "tie"

	if (left === "scissors" && right === "paper") return "won"
	else if (left === "scissors" && right === "rock") return "lost"
	else if (left === "scissors" && right === "scissors") return "tie"
}

btnRock.addEventListener("click", function () {
	leftImg.src = "rock.png"

	const imageValue = rightImgChoice()

	ritghImg.src = imageValue + ".png"

	console.log(`The computer's choice was: ${imageValue}`)

	const result = winCondition("rock", imageValue)

	if (result === "won") {
		leftImg.classList.add("hidden--rps")
		centerVsImg.classList.add("hidden--rps")
		ritghImg.classList.add("hidden--rps")

		centerWonImg.classList.remove("hidden--rps")

		const scoreValueYou =
			Number(scoreRpsYou.textContent.match(/:\s(\d+)/)[1]) + 1

		scoreRpsYou.textContent = `Score (you): ${scoreValueYou}`
	} else if (result === "tie") {
		leftImg.classList.add("hidden--rps")
		centerVsImg.classList.add("hidden--rps")
		ritghImg.classList.add("hidden--rps")

		centerTieImg.classList.remove("hidden--rps")
	} else {
		leftImg.classList.add("hidden--rps")
		centerVsImg.classList.add("hidden--rps")
		ritghImg.classList.add("hidden--rps")

		centerLostImg.classList.remove("hidden--rps")

		const scoreValueComputer =
			Number(scoreRpsComputer.textContent.match(/:\s(\d+)/)[1]) + 1

		scoreRpsComputer.textContent = `Score (computer): ${scoreValueComputer}`
	}
})

btnPaper.addEventListener("click", function () {
	leftImg.src = "paper.png"

	const imageValue = rightImgChoice()

	ritghImg.src = imageValue + ".png"

	console.log(`The computer's choice was: ${imageValue}`)

	const result = winCondition("paper", imageValue)

	if (result === "won") {
		leftImg.classList.add("hidden--rps")
		centerVsImg.classList.add("hidden--rps")
		ritghImg.classList.add("hidden--rps")

		centerWonImg.classList.remove("hidden--rps")

		const scoreValueYou =
			Number(scoreRpsYou.textContent.match(/:\s(\d+)/)[1]) + 1

		scoreRpsYou.textContent = `Score (you): ${scoreValueYou}`
	} else if (result === "tie") {
		leftImg.classList.add("hidden--rps")
		centerVsImg.classList.add("hidden--rps")
		ritghImg.classList.add("hidden--rps")

		centerTieImg.classList.remove("hidden--rps")
	} else {
		leftImg.classList.add("hidden--rps")
		centerVsImg.classList.add("hidden--rps")
		ritghImg.classList.add("hidden--rps")

		centerLostImg.classList.remove("hidden--rps")

		const scoreValueComputer =
			Number(scoreRpsComputer.textContent.match(/:\s(\d+)/)[1]) + 1

		scoreRpsComputer.textContent = `Score (computer): ${scoreValueComputer}`
	}
})

btnScissors.addEventListener("click", function () {
	leftImg.src = "scissors.png"

	const imageValue = rightImgChoice()

	ritghImg.src = imageValue + ".png"

	console.log(`The computer's choice was: ${imageValue}`)

	const result = winCondition("scissors", imageValue)

	if (result === "won") {
		leftImg.classList.add("hidden--rps")
		centerVsImg.classList.add("hidden--rps")
		ritghImg.classList.add("hidden--rps")

		centerWonImg.classList.remove("hidden--rps")

		const scoreValueYou =
			Number(scoreRpsYou.textContent.match(/:\s(\d+)/)[1]) + 1

		scoreRpsYou.textContent = `Score (you): ${scoreValueYou}`
	} else if (result === "tie") {
		leftImg.classList.add("hidden--rps")
		centerVsImg.classList.add("hidden--rps")
		ritghImg.classList.add("hidden--rps")

		centerTieImg.classList.remove("hidden--rps")
	} else {
		leftImg.classList.add("hidden--rps")
		centerVsImg.classList.add("hidden--rps")
		ritghImg.classList.add("hidden--rps")

		centerLostImg.classList.remove("hidden--rps")

		const scoreValueComputer =
			Number(scoreRpsComputer.textContent.match(/:\s(\d+)/)[1]) + 1

		scoreRpsComputer.textContent = `Score (computer): ${scoreValueComputer}`
	}
})

btnAgain.addEventListener("click", function () {
	leftImg.src = "rock.png"

	ritghImg.src = "paper.png"

	if (!centerWonImg.classList.contains("hidden--rps"))
		centerWonImg.classList.add("hidden--rps")
	if (!centerTieImg.classList.contains("hidden--rpg"))
		centerTieImg.classList.add("hidden--rps")
	if (!centerLostImg.classList.contains("hidden--rps"))
		centerLostImg.classList.add("hidden--rps")

	centerVsImg.classList.remove("hidden--rps")
	leftImg.classList.remove("hidden--rps")
	ritghImg.classList.remove("hidden--rps")
})
