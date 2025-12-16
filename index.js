const button = document.getElementById('mybutton')
const showbutton = document.getElementById('showbutton')
const input = document.getElementById('myinput')

button.addEventListener('click', function () {
	debugger
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
})
