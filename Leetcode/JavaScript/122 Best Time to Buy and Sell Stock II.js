/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let totalProfit = 0;

    for (var index = 0; index < prices.length; index++) {
        curr = prices[index];

        while((curr < prices[index+1]) && (prices[index] < prices[index+1])) {
            index++
        }
        let change = prices[index] - curr;
        totalProfit += change
    }

    return totalProfit;
};
