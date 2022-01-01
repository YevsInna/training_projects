const board = document.querySelector('#board')
const colors = ['#F30DA8', '#0DF3E6', '#FF360A', '#36FB05', '#F6FB05', '#EE7EEA', '#44BCFF', '#2D900A',
'#EE0B5D', '#0B07DA', '#045E0D']
const SQUARES_NUMBER = 600

for(let i = 0; i< SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event){
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event){
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[ Math.floor(Math.random() * colors.length)]
}