class Solution {
    maxProfit(prices){
        let profit = 0, left=0;
        for(let i=1;i<prices.length;i++){
            if(prices[i]>prices[left]){
                profit = Math.max(profit,prices[i] - prices[left]);
            }else{
                left = i;
            }
        }
        return profit;
    }
}

//Generate fake input data
const solution = new Solution();
const prices = [7,1,5,3,6,4];

//Call the method
const maxProfit = solution.maxProfit(prices);
console.log("Maximum profit: ",maxProfit);