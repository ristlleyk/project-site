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
		answer: 'тюлень',
	},
	{
		input: exInputAnswers,
		answer: 'саболко',
	},
	{
		input: exInputAnswers,
		answer: '53',
	},
	{
		input: exInputAnswers,
		answer: '10',
	},
	{
		input: exInputAnswers,
		answer: '6',
	},
	{
		input: exInputAnswers,
		answer: '7',
	},
	{
		input: exInputAnswers,
		answer: '3574261',
	},
	{
		input: exInputAnswers,
		answer: '2500',
	},
	{
		input: exInputAnswers,
		answer: '6',
	},
	{
		input: exInputAnswers,
		answer: '49',
	},
	{
		input: exInputAnswers,
		answer: 'Татьяна',
	},
	{
		input: exInputAnswers,
		answer: '14',
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
	if (exerciseIndex <= 17) {
		const exercise = document.querySelectorAll('.exercise')

		exercise.forEach(element => element.classList.add('none'))

		exercise.forEach(element => {
			if (element.classList.contains(`exercise${exerciseIndex}`)) {
				element.classList.remove('none')
			}

			if (exerciseIndex === 17) {
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

			if (exerciseIndex !== 17) {
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
	<p class="results-text">Вы ответили правильно на ${score} из 17 заданий</p>
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
                        <div class="your-answer13">Работа проверяется экспертом.</div>
                        <div class="your-answer14">Работа проверяется экспертом.</div>
                        <div class="your-answer15">Работа проверяется экспертом.</div>
                        <div class="your-answer16">Работа проверяется экспертом.</div>
                        <div class="your-answer17">Работа проверяется экспертом.</div>
                    </div>
                    <div class="correct-answers">
                       <div>Правильный ответ</div>
                       <div class="correct-answer1">тюлень</div>
                       <div class="correct-answer2">саболко</div>
                       <div class="correct-answer3">53</div>
                       <div class="correct-answer4">10</div>
                       <div class="correct-answer5">6</div>
                       <div class="correct-answer6">7</div>
                       <div class="correct-answer7">3574261</div>
                       <div class="correct-answer8">2500</div>
                       <div class="correct-answer9">6</div>
                       <div class="correct-answer10">49</div>
                       <div class="correct-answer11">Татьяна</div>
                       <div class="correct-answer12">14</div>
                       <div class="correct-answer13">Работа проверяется экспертом.</div>
                       <div class="correct-answer14">Работа проверяется экспертом.</div>
                       <div class="correct-answer15">Работа проверяется экспертом.</div>
                       <div class="correct-answer16">Работа проверяется экспертом.</div>
                       <div class="correct-answer17">Работа проверяется экспертом.</div>
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
