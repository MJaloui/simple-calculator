let total = 0

document.querySelector('#washAndStyle').addEventListener('click', washAndStyle)
document.querySelector('#hairTrim').addEventListener('click', hairTrim)
document.querySelector('#hairDye').addEventListener('click', hairDye)
document.querySelector('#washAndBlowout').addEventListener('click', washAndBlowout)
document.querySelector('#deepConditioning').addEventListener('click', deepConditioning)

document.querySelector('#removeWashAndStyle').addEventListener('click', removeWashAndStyle)
document.querySelector('#removeHairTrim').addEventListener('click', removeHairTrim)
document.querySelector('#removeHairDye').addEventListener('click', removeHairDye)
document.querySelector('#removeWashAndBlowout').addEventListener('click', removeWashAndBlowout)
document.querySelector('#removeDeepConditioning').addEventListener('click', removeDeepConditioning)
document.querySelector('#resetCost').addEventListener('click', resetCost)


function washAndStyle() {
  total = total + 80
  document.querySelector('#placeToPutResult').innerText = total
  let labelWashAndStyle = document.querySelector('#labelWashAndStyle');
  labelWashAndStyle.innerText=1+parseInt(labelWashAndStyle.innerText);
  console.log(labelWashAndStyle.innerText)

}

function hairTrim() {
  total = total + 20
  document.querySelector('#placeToPutResult').innerText = total
}

function hairDye() {
  total = total + 160
  document.querySelector('#placeToPutResult').innerText = total
}

function washAndBlowout() {
  total = total + 40
  document.querySelector('#placeToPutResult').innerText = total
}

function deepConditioning() {
  total = total + 25
  document.querySelector('#placeToPutResult').innerText = total
}



function removeWashAndStyle() {
  total = total - 80
  document.querySelector('#placeToPutResult').innerText = total
}

function removeHairTrim() {
  total = total - 20
  document.querySelector('#placeToPutResult').innerText = total
}

function removeHairDye() {
  total = total - 160
  document.querySelector('#placeToPutResult').innerText = total
}

function removeWashAndBlowout() {
  total = total - 40
  document.querySelector('#placeToPutResult').innerText = total
}

function removeDeepConditioning() {
  total = total - 25
  document.querySelector('#placeToPutResult').innerText = total
}



function resetCost() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}