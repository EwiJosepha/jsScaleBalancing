const donebtn = document.getElementById('donebtn')
const revealAns = document.getElementById('reveal-ans')


function scaleBalance() {
  let firstnumber = document.getElementById('firstnumber').value
  const secondnumber = document.getElementById('secondnumber').value
  const arr = document.getElementById('array').value
  let splitFirstNumber = firstnumber.split()
  const splitSecondNumber = secondnumber.split()
  console.log(splitFirstNumber)
  console.log(splitSecondNumber)
  splitarr = arr.split('')
  //  let arr2 =splitarr.length
  console.log(splitarr);
  //  console.log(arr2);
  for (let i = 0; i < splitarr.length; i++) {
    for (let j = 0; j < splitarr.length; j++) {
      console.log(splitarr[j])

      // revealAns.innerHTML = arr2
      if (+splitFirstNumber + +splitarr[i] === +splitSecondNumber + +splitarr[j]) {
        console.log(`${splitarr[i]} ${splitarr[j]}`)
        revealAns.innerHTML = `${splitarr[i]} ${splitarr[j]}`
        return;
      }
    }
  }
  revealAns.innerHTML = "imposiible"
  return
}

donebtn.addEventListener('click', () => {
  scaleBalance()

})
