const modal = document.querySelector('.landing-page__modal')
const ctaBox = document.querySelector('.landing-page__form-box')
const inputs = document.querySelectorAll('input')
const emailInput = document.querySelector('#email')

const blueBtn = document.querySelector('.landing-page__trial-btn')
const greenBtn = document.querySelector('#submit')
const modalBtn = modal.querySelector('button')

let isReady = false
let errors
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const regexPass = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const highlightForm = () => {
	ctaBox.classList.add('highlight')
	setTimeout(() => {
		ctaBox.classList.remove('highlight')
	}, 1100)
}

const checkForm = e => {
	e.preventDefault()
	checkErrors()
	if (isReady) {
		openModal()
	} else {
		console.log('Nie !')
	}
}
const openModal = () => {
	modal.classList.add('show')

	setTimeout(closeModal, 5000)
}
const closeModal = () => {
	modal.classList.remove('show')
	inputs.forEach(input => {
		input.value = ''
	})
}
const checkErrors = () => {
	errors = 0

	inputs.forEach(input => {
		if (input.value === '') {
			showError(input)
			errors++
		} else {
			input.parentElement.classList.remove('active')
		}
	})
	checkMail()

	errors === 0 ? (isReady = true) : (isReady = false)
}

const checkMail = () => {
	if (!regexEmail.test(emailInput.value)) {
		errors++
		showError(emailInput)
	} else {
		return
	}
}

const showError = input => {
	input.parentElement.classList.add('active')
}

blueBtn.addEventListener('click', highlightForm)
greenBtn.addEventListener('click', checkForm)
modalBtn.addEventListener('click', closeModal)
