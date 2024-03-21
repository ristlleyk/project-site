// Включение карточек выбора задания

const theoryCard = document.querySelector('#theory-card')
const practiceCard = document.querySelector('#practice-card')
const chooseExTheoryCard = document.querySelector('#choose-ex__theory-card')
const chooseExPracticeCard = document.querySelector('#choose-ex__practice-card')

theoryCard.addEventListener('click', function () {
	if (chooseExTheoryCard.classList.contains('none')) {
		chooseExTheoryCard.classList.remove('none')
		chooseExPracticeCard.classList.add('none')
	} else {
		chooseExTheoryCard.classList.add('none')
	}
})

practiceCard.addEventListener('click', function () {
	if (chooseExPracticeCard.classList.contains('none')) {
		chooseExPracticeCard.classList.remove('none')
		chooseExTheoryCard.classList.add('none')
	} else {
		chooseExPracticeCard.classList.add('none')
	}
})
