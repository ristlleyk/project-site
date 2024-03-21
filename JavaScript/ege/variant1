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
		answer: '25',
	},
	{
		input: exInputAnswers,
		answer: 'wyxz',
	},
	{
		input: exInputAnswers,
		answer: '0',
	},
	{
		input: exInputAnswers,
		answer: '1100',
	},
	{
		input: exInputAnswers,
		answer: '17',
	},
	{
		input: exInputAnswers,
		answer: '112',
	},
	{
		input: exInputAnswers,
		answer: '2430',
	},
	{
		input: exInputAnswers,
		answer: '65',
	},
	{
		input: exInputAnswers,
		answer: '1549',
	},
	{
		input: exInputAnswers,
		answer: '61',
	},
	{
		input: exInputAnswers,
		answer: '172',
	},
	{
		input: exInputAnswers,
		answer: '17',
	},
	{
		input: exInputAnswers,
		answer: '3',
	},
	{
		input: exInputAnswers,
		answer: '915',
	},
	{
		input: exInputAnswers,
		answer: '88',
	},
	{
		input: exInputAnswers,
		answer: '4036',
	},
	{
		input: exInputAnswers,
		answer: '101 9020',
	},
	{
		input: exInputAnswers,
		answer: '2098 1202',
	},
	{
		input: exInputAnswers,
		answer: '13',
	},
	{
		input: exInputAnswers,
		answer: '14 16',
	},
	{
		input: exInputAnswers,
		answer: '15 17',
	},
	{
		input: exInputAnswers,
		answer: '11',
	},
	{
		input: exInputAnswers,
		answer: '36',
	},
	{
		input: exInputAnswers,
		answer: '64',
	},
	{
		input: exInputAnswers,
		answer: '500001 666672 500048 968874 500069 500070 500079 666776 500114 750174',
	},
	{
		input: exInputAnswers,
		answer: '2873 267',
	},
	{
		input: exInputAnswers,
		answer: '387672 591081',
	},
]

const answerBtns = document.querySelectorAll(`.answer-btn`)
const exInputAnswerRow = document.querySelector('.ex-input-answer-row');
const nextBtn = document.querySelector('#next-btn');
const previousBtn = document.querySelector('#previous-btn');
const completeBtn = document.querySelector('#complete-btn');
const backBtn = document.querySelector('#back-btn');
const resultsContainer = document.querySelector('#results-container')
const results = document.querySelector('#results');

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
	sessionStorage.setItem(`inputData${inputIndex}`, answers[answerIndex]['input'][inputIndex].value);

    if (answers[answerIndex]['input'][inputIndex].value == answers[answerIndex]['answer']) {
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
		inputIndex++;
		answerIndex++;
		btnIndex++;
		answerBtns.forEach(element => {
				element.onclick = function () {
					checkAnswer()
					return false
				}
		})
	} else {
		console.log('unsuccess')
	}
	exerciseIndex++;
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
		inputIndex--;
		answerIndex--;
		btnIndex--;
		exerciseIndex++;
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
                        <div class="your-answer your-answer1">${sessionStorage.getItem('inputData0')}</div>
                        <div class="your-answer2">${sessionStorage.getItem('inputData1')}</div>
                        <div class="your-answer3">${sessionStorage.getItem('inputData2')}</div>
                        <div class="your-answer4">${sessionStorage.getItem('inputData3')}</div>
                        <div class="your-answer5">${sessionStorage.getItem('inputData4')}</div>
                        <div class="your-answer6">${sessionStorage.getItem('inputData5')}</div>
                        <div class="your-answer7">${sessionStorage.getItem('inputData6')}</div>
                        <div class="your-answer8">${sessionStorage.getItem('inputData7')}</div>
                        <div class="your-answer9">${sessionStorage.getItem('inputData8')}</div>
                        <div class="your-answer10">${sessionStorage.getItem('inputData9')}</div>
                        <div class="your-answer11">${sessionStorage.getItem('inputData10')}</div>
                        <div class="your-answer12">${sessionStorage.getItem('inputData11')}</div>
                        <div class="your-answer13">${sessionStorage.getItem('inputData12')}</div>
                        <div class="your-answer14">${sessionStorage.getItem('inputData13')}</div>
                        <div class="your-answer15">${sessionStorage.getItem('inputData14')}</div>
                        <div class="your-answer16">${sessionStorage.getItem('inputData15')}</div>
                        <div class="your-answer17">${sessionStorage.getItem('inputData16')}</div>
                        <div class="your-answer18">${sessionStorage.getItem('inputData17')}</div>
                        <div class="your-answer19">${sessionStorage.getItem('inputData18')}</div>
                        <div class="your-answer20">${sessionStorage.getItem('inputData19')}</div>
                        <div class="your-answer21">${sessionStorage.getItem('inputData20')}</div>
                        <div class="your-answer22">${sessionStorage.getItem('inputData21')}</div>
                        <div class="your-answer23">${sessionStorage.getItem('inputData22')}</div>
                        <div class="your-answer24">${sessionStorage.getItem('inputData23')}</div>
                        <div class="your-answer25">${sessionStorage.getItem('inputData24')}</div>
                        <div class="your-answer26">${sessionStorage.getItem('inputData25')}</div>
                        <div class="your-answer27">${sessionStorage.getItem('inputData26')}</div>
                    </div>
                    <div class="correct-answers">
                       <div>Правильный ответ</div>
                       <div class="correct-answer1">25</div>
                       <div class="correct-answer2">wyxz</div>
                       <div class="correct-answer3">0</div>
                       <div class="correct-answer4">1100</div>
                       <div class="correct-answer5">17</div>
                       <div class="correct-answer6">112</div>
                       <div class="correct-answer7">2430</div>
                       <div class="correct-answer8">65</div>
                       <div class="correct-answer9">1549</div>
                       <div class="correct-answer10">61</div>
                       <div class="correct-answer11">172</div>
                       <div class="correct-answer12">17</div>
                       <div class="correct-answer13">3</div>
                       <div class="correct-answer14">915</div>
                       <div class="correct-answer15">88</div>
                       <div class="correct-answer16">4036</div>
                       <div class="correct-answer17">101 9020</div>
                       <div class="correct-answer18">2098 1202</div>
                       <div class="correct-answer19">13</div>
                       <div class="correct-answer20">14 16</div>
                       <div class="correct-answer21">15 17</div>
                       <div class="correct-answer22">11</div>
                       <div class="correct-answer23">36</div>
                       <div class="correct-answer24">64</div>
                       <div class="correct-answer25">500001 666672 500048 968874 500069 500070 500079 666776 500114 750174</div>
                       <div class="correct-answer26">2873 267</div>
                       <div class="correct-answer27">387672 591081</div>
                    </div>
                </div>
	`

	exercise.forEach(element => element.classList.add('none'))
	previousBtn.classList.add('none')
	completeBtn.classList.add('none')
	resultsContainer.classList.remove('none')

	results.innerHTML = resultsTemplate;
}

// Предупреждение о перезагрузке/закрытии страницы

window.onbeforeunload = function () {
	return true
}

backBtn.onclick = function () {
	window.onbeforeunload = null;
}
