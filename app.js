const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const board = document.querySelector('#board')
const timeEl = document.querySelector('#time')
const colors = ['aquamarine','blue','chartreuse',
								'cornflowerblue','violet','teal',
								'red','palevioletred','olive']
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
	event.preventDefault()
	screens[0].classList.add('up')
	
})

timeList.addEventListener('click', (event) =>{
	if (event.target.classList.contains('time-btn')){
		time = parseInt(event.target.getAttribute('data-time'))
		screens[1].classList.add('up')
		startGame()
	}
})

board.addEventListener('click',(event) => {
	if (event.target.classList.contains('circle')){
		++score;
		event.target.remove()
		createRandomCircle()
	}
})
// debug
function startGame () {
	setInterval(decreaseTime, 1000)
	createRandomCircle()
	setTime(time)
	

}

function decreaseTime(){
	if (time === 0){
		finishGame()
	}
	else {
		let current = --time;
		if (current < 10){
			current = `0${current}`
		}
		setTime(current)
	}
	
}

function setTime (value){
	timeEl.innerHTML = `00:${value}`
}

function finishGame(){
	board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span></h1>`
	timeEl.parentNode.style.display = 'none'
}


function createRandomCircle(){
	const circle = document.createElement('div')
	const size = getRandomNumber(10,30)
	const width = board.getBoundingClientRect().width
	const heigth = board.getBoundingClientRect().height
	const x = getRandomNumber(10,width-size)
	const y = getRandomNumber(10,heigth-size)
	const color = getRandColor()
	circle.classList.add('circle')
	circle.style.width =  `${size}px`
	circle.style.height =  `${size}px`
	circle.style.top = `${y}px`
	circle.style.left = `${x}px`
	circle.style.background = `${color}`
	board.append(circle)
}


function getRandomNumber(min, max){
	return Math.round(Math.random() * (max- min) + min)
}

function getRandColor(){
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}