const container = document.querySelector('.container')


function create_board (squareSize){
    if (container.children.length > 0)
    {
        container.innerHTML = ''
    }
    
    borderSize = squareSize*2
    pixelSize = (592 - borderSize) / squareSize



    for(i=0; i<squareSize; i++){
        const rowContainer = document.createElement('div')
        rowContainer.classList.add('rowContainer')
        container.appendChild(rowContainer)
        for(j=0; j<squareSize; j++){
            const div = document.createElement('div')
            div.classList.add('divSquare')
            
            div.style.height = `${pixelSize}px`
            div.style.width = `${pixelSize}px`

            rowContainer.appendChild(div)

        
        }
    }
    //560 x 560 square

    //560 / size = height x widtb
}
create_board(16)

function pixelated (){
    const divSquares = document.querySelectorAll('.divSquare')

    divSquares.forEach((divSquare) => {
        divSquare.addEventListener('mouseover', () =>{
            divSquare.style.backgroundColor = 'red'
        })
    })
}
pixelated()


const button = document.querySelector('#sizeButton')
button.addEventListener('click', () =>{

    squareSize = prompt('Choose your grid size', '16')
    while (squareSize>99){
        alert("Grid size can't be over 99")
        squareSize = prompt('Choose your grid size', '16')
    }

    create_board(Number(squareSize))
    pixelated()
})











