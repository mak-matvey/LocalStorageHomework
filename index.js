const button = document.getElementById('mybutton')
const input = document.getElementById('myinput')

button.addEventListener('click', function () {
	const currentValue = input.value
	localStorage.setItem('Text', currentValue)
})
