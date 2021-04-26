let game = document.querySelector('.game')
let circle = 'circle'
let cross = 'cross'
let step = cross
newstep = (step, event)=> {
  let cell = event.target
  if(cell.lastChild === null && cell.className ==='column-game' ){
    cell.insertAdjacentHTML('afterbegin',`<div class="${step}"></div>`)
    if(step === cross){
      return circle
    }
    if(step === circle){
      return cross
    }
  }return step
}
checkWin = ()=>{
  let arrayWin =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  let gameArrayBoxes = game.children
  for (let i = 0; i < arrayWin.length; i++){
    if(gameArrayBoxes[arrayWin[i][0]].innerHTML == '<div class="cross"></div>' && 
    gameArrayBoxes[arrayWin[i][1]].innerHTML == '<div class="cross"></div>' &&
    gameArrayBoxes[arrayWin[i][2]].innerHTML == '<div class="cross"></div>'
    ){
      return 'крестики'
    }
    if(gameArrayBoxes[arrayWin[i][0]].innerHTML == '<div class="circle"></div>' && 
    gameArrayBoxes[arrayWin[i][1]].innerHTML == '<div class="circle"></div>' &&
    gameArrayBoxes[arrayWin[i][2]].innerHTML == '<div class="circle"></div>'
    ){
      return 'нолики'
    }
  }
}
createResult = (winner) =>{
  if(winner === undefined){
  }else{
    document.querySelector('body').insertAdjacentHTML('afterbegin',`<h1> Победили ${winner}</h1>`)
  }
}

game.addEventListener('click', event =>{
 step = newstep(step,event)
 let winner = checkWin()
 createResult(winner)
}) 