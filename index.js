const initialPrice = document.querySelector("#initial-price");
const quantity     = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price"); 
const submitBtn    = document.querySelector("#submit-btn");
const output       = document.querySelector("#output");


function calculateStockResult(initial_price, stocks_quantity, current_price)
{
    var res =``;
    if(initial_price > current_price){
       var loss = (initial_price - current_price) * stocks_quantity;
       var lossPer = (loss/(initial_price * stocks_quantity)) * 100;
       lossPer = lossPer.toFixed(2);
       res = `Whoops!! Your loss is ${loss} and loss Percentage is ${lossPer}% :(`;
    }
    else if(initial_price < current_price){
        var profit = (current_price - initial_price) * stocks_quantity;
        var profitPer = (profit/(initial_price * stocks_quantity)) * 100;
        profitPer = profitPer.toFixed(2);
        res = `Yay!! Your Profit is ${profit} and profit Percentage is ${profitPer}%`;
    }
    else{
        res = `No pain No gain, and no gain no pain :)`;
    }
    return res;
}


function submitBtnHandler(){
    if(Number(initialPrice.value)<0 || Number(quantity.value)<0 || Number(currentPrice.value)< 0){
        output.innerText = "Enter Positive Values";
    }
    else{
    const result = calculateStockResult(Number(initialPrice.value), Number(quantity.value), Number(currentPrice.value));
    output.innerText = result;
    }
}


submitBtn.addEventListener("click", submitBtnHandler);
