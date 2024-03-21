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
		answer: '61',
	},
	{
		input: exInputAnswers,
		answer: 'wxyz',
	},
	{
		input: exInputAnswers,
		answer: '13354',
	},
	{
		input: exInputAnswers,
		answer: '011',
	},
	{
		input: exInputAnswers,
		answer: '39',
	},
	{
		input: exInputAnswers,
		answer: '211',
	},
	{
		input: exInputAnswers,
		answer: '288',
	},
	{
		input: exInputAnswers,
		answer: '28239',
	},
	{
		input: exInputAnswers,
		answer: '691',
	},
	{
		input: exInputAnswers,
		answer: '42',
	},
	{
		input: exInputAnswers,
		answer: '2320',
	},
	{
		input: exInputAnswers,
		answer: '20',
	},
	{
		input: exInputAnswers,
		answer: '168',
	},
	{
		input: exInputAnswers,
		answer: '19',
	},
	{
		input: exInputAnswers,
		answer: '13',
	},
	{
		input: exInputAnswers,
		answer: '4048',
	},
	{
		input: exInputAnswers,
		answer: '42 25',
	},
	{
		input: exInputAnswers,
		answer: '1978 749',
	},
	{
		input: exInputAnswers,
		answer: '10',
	},
	{
		input: exInputAnswers,
		answer: '9 22',
	},
	{
		input: exInputAnswers,
		answer: '21',
	},
	{
		input: exInputAnswers,
		answer: '17',
	},
	{
		input: exInputAnswers,
		answer: '77',
	},
	{
		input: exInputAnswers,
		answer: '5195',
	},
	{
		input: exInputAnswers,
		answer: '321657 159 321657 159 35117257 17359 36128757 17859 37140257 18359 38151757 18859 39163257 19359',
	},
	{
		input: exInputAnswers,
		answer: '2108 9',
	},
	{
		input: exInputAnswers,
		answer: '72 991844',
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
                       <div class="correct-answer1">61</div>
                       <div class="correct-answer2">wxyz</div>
                       <div class="correct-answer3">13354</div>
                       <div class="correct-answer4">011</div>
                       <div class="correct-answer5">39</div>
                       <div class="correct-answer6">211</div>
                       <div class="correct-answer7">288</div>
                       <div class="correct-answer8">28239</div>
                       <div class="correct-answer9">691</div>
                       <div class="correct-answer10">42</div>
                       <div class="correct-answer11">2320</div>
                       <div class="correct-answer12">20</div>
                       <div class="correct-answer13">168</div>
                       <div class="correct-answer14">19</div>
                       <div class="correct-answer15">13</div>
                       <div class="correct-answer16">4048</div>
                       <div class="correct-answer17">42 25</div>
                       <div class="correct-answer18">1978 749</div>
                       <div class="correct-answer19">10</div>
                       <div class="correct-answer20">9 22</div>
                       <div class="correct-answer21">21</div>
                       <div class="correct-answer22">17</div>
                       <div class="correct-answer23">77</div>
                       <div class="correct-answer24">5195</div>
                       <div class="correct-answer25">321657 159 321657 159 35117257 17359 36128757 17859 37140257 18359 38151757 18859 39163257 19359</div>
                       <div class="correct-answer26">2108 9</div>
                       <div class="correct-answer27">72 991844</div>
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
