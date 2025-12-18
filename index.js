const button = document.getElementById('mybutton')
const showbutton = document.getElementById('showbutton')
const input = document.getElementById('myinput')
const output = document.getElementById('output')

button.addEventListener('click', function () {
	const currentValue = input.value
	if (localStorage.getItem('Text')) {
		const array = JSON.parse(localStorage.getItem('Text'))
		array.push(currentValue)
		localStorage.setItem('Text', JSON.stringify(array))
	} else {
		localStorage.setItem('Text', currentValue)
	}
})

showbutton.addEventListener('click', function () {
	let storage = JSON.parse(localStorage.getItem('Text'))

	if (storage !== null) {
		storage.map(item => (output.innerHTML += `<li>${item}</li>`))
		console.log(`Your notes: ${storage}`)
	} else {
		output.textContent = 'There is no notes!'
		console.log('There is notes!')
	}
})
