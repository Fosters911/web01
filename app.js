const deck = document.querySelector('.deck')
const btn = document.querySelector('.btn-start')



deck.addEventListener('click', createX)
// btn.addEventListener('click', startGame)

const arrTableDate = document.getElementsByClassName('inner')
console.log(arrTableDate)





function createX (event) {
    
    if (event.target.textContent==='X'|| event.target.textContent==='O') {
        message('Эта ячейка занята!')
    } else {
       
        event.target.textContent='X'
        arrGame(arrTableDate)
        message('Ваш ход!')
    }

}


function message(msg) {
    document.querySelector('.msg').textContent = msg
}

function arrGame (arr){
    const arrText = []
for (let i = 0; i < arr.length; i++) {
    arrText.push(arr[i].innerHTML)
  }
  console.log(arrText)
return arrText
}