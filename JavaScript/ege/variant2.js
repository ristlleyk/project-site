// Задания

let answerIndex = 0
let exerciseIndex = 2
let inputIndex = 0
let btnIndex = 1
let score = 0
let inputData = []

const exercise = document.querySelectorAll('.exercise')

exercise.forEach(element => element.classList.add('none'))
exercise.forEach(element => {
	if (element.classList.contains(`exercise${1}`)) {
		element.classList.remove('none')
	}
})

const exInputAnswers = document.querySelectorAll(`.ex-input-answer`)

const answers = [
	{
		input: exInputAnswers,
		answer: '12',
	},
	{
		input: exInputAnswers,
		answer: 'zywx',
	},
	{
		input: exInputAnswers,
		answer: '420',
	},
	{
		input: exInputAnswers,
		answer: '0011',
	},
	{
		input: exInputAnswers,
		answer: '830',
	},
	{
		input: exInputAnswers,
		answer: '56',
	},
	{
		input: exInputAnswers,
		answer: '15',
	},
	{
		input: exInputAnswers,
		answer: '781',
	},
	{
		input: exInputAnswers,
		answer: '6',
	},
	{
		input: exInputAnswers,
		answer: '3',
	},
	{
		input: exInputAnswers,
		answer: '26244',
	},
	{
		input: exInputAnswers,
		answer: '21',
	},
	{
		input: exInputAnswers,
		answer: '5',
	},
	{
		input: exInputAnswers,
		answer: '170',
	},
	{
		input: exInputAnswers,
		answer: '390',
	},
	{
		input: exInputAnswers,
		answer: '11',
	},
	{
		input: exInputAnswers,
		answer: '5104 19930',
	},
	{
		input: exInputAnswers,
		answer: '2027 1366',
	},
	{
		input: exInputAnswers,
		answer: '29',
	},
	{
		input: exInputAnswers,
		answer: '25 28',
	},
	{
		input: exInputAnswers,
		answer: '24',
	},
	{
		input: exInputAnswers,
		answer: '8',
	},
	{
		input: exInputAnswers,
		answer: '376',
	},
	{
		input: exInputAnswers,
		answer: '229',
	},
	{
		input: exInputAnswers,
		answer: '2023 1 204323 101 2025023 1001 20232023 10001 202302023 100001',
	},
	{
		input: exInputAnswers,
		answer: '27994 245',
	},
	{
		input: exInputAnswers,
		answer: '280212 26997',
	},
]

const answerBtns = document.querySelectorAll(`.answer-btn`)
const exInputAnswerRow = document.querySelector('.ex-input-answer-row')
const nextBtn = document.querySelector('#next-btn')
const previousBtn = document.querySelector('#previous-btn')
const completeBtn = document.querySelector('#complete-btn')
const backBtn = document.querySelector('#back-btn')
const resultsContainer = document.querySelector('#results-container')
const results = document.querySelector('#results')

answerBtns.forEach(element => {
	element.onclick = function () {
		checkAnswer()
	}
})

function checkAnswer() {
	if (!answers[answerIndex]['input'][inputIndex].value) {
		return
	}

	// localStorage.setItem(`inputData${inputIndex}`, answers[answerIndex]['input'][inputIndex].value);
	sessionStorage.setItem(
		`inputData${inputIndex}`,
		answers[answerIndex]['input'][inputIndex].value
	)

	if (
		answers[answerIndex]['input'][inputIndex].value ==
		answers[answerIndex]['answer']
	) {
		score++
		answers[answerIndex]['input'][inputIndex].classList.remove('wrong-answer')
		answers[answerIndex]['input'][inputIndex].classList.add('correct-answer')
		localStorage.setItem(`isCorrectAnswer${inputIndex}`, 'correct-answer')
	} else {
		answers[answerIndex]['input'][inputIndex].classList.remove('correct-answer')
		answers[answerIndex]['input'][inputIndex].classList.add('wrong-answer')
		localStorage.setItem(`isCorrectAnswer${inputIndex}`, 'wrong-answer')
	}
}

// Показать следующее/предыдущее задание

nextBtn.onclick = function () {
	showNextExercise()
	return false
}

previousBtn.onclick = function () {
	showPreviousExercise()
	return false
}

function showNextExercise() {
	if (exerciseIndex <= 27) {
		const exercise = document.querySelectorAll('.exercise')

		exercise.forEach(element => element.classList.add('none'))

		exercise.forEach(element => {
			if (element.classList.contains(`exercise${exerciseIndex}`)) {
				element.classList.remove('none')
			}

			if (exerciseIndex === 27) {
				nextBtn.classList.add('none')
				completeBtn.classList.remove('none')
			}
		})
		inputIndex++
		answerIndex++
		btnIndex++
		answerBtns.forEach(element => {
			element.onclick = function () {
				checkAnswer()
				return false
			}
		})
	} else {
		console.log('unsuccess')
	}
	exerciseIndex++
}

function showPreviousExercise() {
	if (exerciseIndex > 2) {
		const exercise = document.querySelectorAll('.exercise')

		exercise.forEach(element => element.classList.add('none'))

		exerciseIndex = exerciseIndex - 2

		exercise.forEach(element => {
			if (element.classList.contains(`exercise${exerciseIndex}`)) {
				element.classList.remove('none')
			}

			if (exerciseIndex !== 27) {
				nextBtn.classList.remove('none')
				completeBtn.classList.add('none')
			}
		})
		inputIndex--
		answerIndex--
		btnIndex--
		exerciseIndex++
	} else {
		console.log('unsuccess')
	}
}

// Завершить вариант

completeBtn.onclick = function () {
	completeVariant()
	return false
}

function completeVariant() {
	const exercise = document.querySelectorAll('.exercise')
	const resultsTemplate = `
	<p class="results-text">Вы ответили правильно на ${score} из 27 заданий</p>
	<div class="results-table">
                    <div class="your-answers">
                        <div>Ваш ответ</div>
                        <div class="your-answer your-answer1">${sessionStorage.getItem(
													'inputData0'
												)}</div>
                        <div class="your-answer2">${sessionStorage.getItem(
													'inputData1'
												)}</div>
                        <div class="your-answer3">${sessionStorage.getItem(
													'inputData2'
												)}</div>
                        <div class="your-answer4">${sessionStorage.getItem(
													'inputData3'
												)}</div>
                        <div class="your-answer5">${sessionStorage.getItem(
													'inputData4'
												)}</div>
                        <div class="your-answer6">${sessionStorage.getItem(
													'inputData5'
												)}</div>
                        <div class="your-answer7">${sessionStorage.getItem(
													'inputData6'
												)}</div>
                        <div class="your-answer8">${sessionStorage.getItem(
													'inputData7'
												)}</div>
                        <div class="your-answer9">${sessionStorage.getItem(
													'inputData8'
												)}</div>
                        <div class="your-answer10">${sessionStorage.getItem(
													'inputData9'
												)}</div>
                        <div class="your-answer11">${sessionStorage.getItem(
													'inputData10'
												)}</div>
                        <div class="your-answer12">${sessionStorage.getItem(
													'inputData11'
												)}</div>
                        <div class="your-answer13">${sessionStorage.getItem(
													'inputData12'
												)}</div>
                        <div class="your-answer14">${sessionStorage.getItem(
													'inputData13'
												)}</div>
                        <div class="your-answer15">${sessionStorage.getItem(
													'inputData14'
												)}</div>
                        <div class="your-answer16">${sessionStorage.getItem(
													'inputData15'
												)}</div>
                        <div class="your-answer17">${sessionStorage.getItem(
													'inputData16'
												)}</div>
                        <div class="your-answer18">${sessionStorage.getItem(
													'inputData17'
												)}</div>
                        <div class="your-answer19">${sessionStorage.getItem(
													'inputData18'
												)}</div>
                        <div class="your-answer20">${sessionStorage.getItem(
													'inputData19'
												)}</div>
                        <div class="your-answer21">${sessionStorage.getItem(
													'inputData20'
												)}</div>
                        <div class="your-answer22">${sessionStorage.getItem(
													'inputData21'
												)}</div>
                        <div class="your-answer23">${sessionStorage.getItem(
													'inputData22'
												)}</div>
                        <div class="your-answer24">${sessionStorage.getItem(
													'inputData23'
												)}</div>
                        <div class="your-answer25">${sessionStorage.getItem(
													'inputData24'
												)}</div>
                        <div class="your-answer26">${sessionStorage.getItem(
													'inputData25'
												)}</div>
                        <div class="your-answer27">${sessionStorage.getItem(
													'inputData26'
												)}</div>
                    </div>
                    <div class="correct-answers">
                       <div>Правильный ответ</div>
                       <div class="correct-answer1">12</div>
                       <div class="correct-answer2">zywx</div>
                       <div class="correct-answer3">420</div>
                       <div class="correct-answer4">0011</div>
                       <div class="correct-answer5">830</div>
                       <div class="correct-answer6">56</div>
                       <div class="correct-answer7">15</div>
                       <div class="correct-answer8">781</div>
                       <div class="correct-answer9">6</div>
                       <div class="correct-answer10">3</div>
                       <div class="correct-answer11">26244</div>
                       <div class="correct-answer12">21</div>
                       <div class="correct-answer13">5</div>
                       <div class="correct-answer14">170</div>
                       <div class="correct-answer15">390</div>
                       <div class="correct-answer16">11</div>
                       <div class="correct-answer17">5104 19930</div>
                       <div class="correct-answer18">2027 1366</div>
                       <div class="correct-answer19">29</div>
                       <div class="correct-answer20">25 28</div>
                       <div class="correct-answer21">24</div>
                       <div class="correct-answer22">8</div>
                       <div class="correct-answer23">376</div>
                       <div class="correct-answer24">229</div>
                       <div class="correct-answer25">2023 1 204323 101 2025023 1001 20232023 10001 202302023 100001</div>
                       <div class="correct-answer26">27994 245</div>
                       <div class="correct-answer27">280212 26997</div>
                    </div>
                </div>
	`

	exercise.forEach(element => element.classList.add('none'))
	previousBtn.classList.add('none')
	completeBtn.classList.add('none')
	resultsContainer.classList.remove('none')

	results.innerHTML = resultsTemplate
}

// Предупреждение о перезагрузке/закрытии страницы

window.onbeforeunload = function () {
	return true
}

backBtn.onclick = function () {
	window.onbeforeunload = null
}
