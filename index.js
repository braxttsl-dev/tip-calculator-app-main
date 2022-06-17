// Grabbing all elements
const tipEl = document.querySelectorAll("#tip")
const costEL = document.querySelector("#bill-input")
const peopleEl = document.querySelector("#people-input")
const resetBtn = document.querySelector("#reset-btn")
const resultTip = document.querySelector("#result-tip")
const resultTotal = document.querySelector("#result-total")
let tip = 0;
let bill = 0;
let people = 0;


// Changes percentage string to decimal int
function toDecimal(percent) {
    return parseFloat(percent) / 100;
}

//Focus and Blur for Input
costEL.addEventListener("focus", event => {
    event.currentTarget.style.border = '3px solid #26C2AE'
})
costEL.addEventListener("blur", event => {
    event.currentTarget.style.border = ''
})

peopleEl.addEventListener("blur", event => {
    event.currentTarget.style.border = ''
})


// Gets percentage to decimal
tipEl.forEach(tip => {
    tip.addEventListener("click", event => {
        document.querySelector(".active")?.classList.remove("active")
        event.currentTarget.classList.add("active")
    })
})

// Gets Bill amount
costEL.addEventListener("keyup", ()=> {
    bill = parseInt(costEL.value)
    console.log(bill)
    return bill
    
})

// Gets people amount
peopleEl.addEventListener("keyup", ()=> {
    peopleEL.dataset.people = parseInt(peopleEl.value)   
})






let tipSplit = Math.round(bill *  / people)
let tipTotal = Math.round(bill / 4 + tipSplit)

resultTip.textContent = `$${tipSplit}`
resultTotal.textContent = `$${tipTotal}`

resetBtn.addEventListener("click", () => {
    // resultTip.textContent = "$0.00"
    // resultTotal.textContent = "$0.00"
    // bill.textContent = "0"
    console.log(people)
})