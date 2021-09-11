const bill = document.querySelector('#bill')
const next = document.querySelector('#next')
const cash = document.querySelector('#cash')
const check = document.querySelector('#check')
const output = document.querySelector('.output')
const table = document.querySelectorAll('.notes')
const error = document.querySelector("#error")

const range = [2000,500,200,100,50,20,10,5,1]

next.addEventListener('click', () => {
  if (bill.value !== "") {
    output.style.visibility = "visible"
  }
})
check.addEventListener('click', () => {
  if (cash.value - bill.value > 0) {
    error.innerHTML=""
    showChange(cash.value - bill.value)
  }
  else {
    error.innerHTML = "Bill Amount is greater than Cash try again!!"
  }
})

const showChange = (amount) => {
  for (let i = 0; i < range.length; i++) {
    const count = Math.trunc( amount / range[i])
    amount = amount % range[i]
    table[i].innerText = count
  }
}