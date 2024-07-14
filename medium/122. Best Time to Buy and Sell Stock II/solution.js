/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let holdCurrentPrice;
    let holdBestPrice;
    let profit = 0;
    
    for(let i = 0; i < prices.length; i++){
        holdCurrentPrice = prices[i];
        
        if(holdBestPrice < holdCurrentPrice){ // we made a profit of selling
            profit += holdCurrentPrice - holdBestPrice; 
        }
        
        holdBestPrice = holdCurrentPrice;
    }
    
    return profit
};