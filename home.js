let btn = document.querySelector("button");
let income = document.querySelector("#income");
let expense = document.querySelector("#expense")
let inp1 = document.querySelector("#inp1")
let inp2 = document.querySelector("#inp2")
let balance = document.querySelector("#balance")
let last = document.querySelector(".last-section");
let lastEnd = document.querySelector(".last");

let transcation = [];

btn.addEventListener("click", function() {

    if(inp1.value > 0){
        income.textContent = Number(income.textContent) + Number(inp1.value);
        balance.textContent = Number(income.textContent) - Number(expense.textContent);  
         last.innerHTML += `<div class="last" style="background-color:rgb(64, 182, 64); color:white; border:none; font-size:17px">
                 <p>${inp2.value}</p>
                <h5>+$<span id="income">${inp1.value}</span></h5>
               
                </div>`     
    }else{
        // expense.textContent = Number(expense.textContent) + Number(inp1.value);
        expense.textContent = Number(expense.textContent) + Math.abs(Number(inp1.value));  
        balance.textContent = Number(income.textContent) - Number(expense.textContent);   
         last.innerHTML += `<div class="last" style="background-color: red; color:white; border:none; font-size:17px">
                <p>${inp2.value}</p>
               <h5>-$<span id="expense">${inp1.value}</span></h5>
         </div>`  
    }
    
    transcation.push({
        amount: Number(inp1.value),
        description: String(inp2.value)
    })
    
    localStorage.setItem("transaction", JSON.stringify(transcation))
    let transaction = JSON.parse(localStorage.getItem("transaction")) || [];

    inp1.value = "";
    inp2.value = "";
})