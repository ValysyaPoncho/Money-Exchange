// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var curr = {}, errObj = {}, emptyObj = {};
    errObj.error = "You are rich, my friend! We don't have so much coins for exchange";
    var H, Q, D, N, P;

    if (currency <= 0) 
        return emptyObj;
    
    if (currency >= 10000)
        return errObj;

    if (currency / 50 >= 1) {
        H = Math.floor(currency / 50);
        curr.H = H;
        currency -= H * 50;
    }
    if (currency / 25 >= 1) {
        Q = Math.floor(currency / 25);
        curr.Q = Q;
        currency -= Q * 25;
    }
    if (currency / 10 >= 1) {
        D = Math.floor(currency / 10);
        curr.D = D;
        currency -= D * 10;
    }
    if (currency / 5 >= 1) {
        N = Math.floor(currency / 5);
        curr.N = N;
        currency -= N * 5;
    }
    if (currency >= 1) {
        P = currency;
        curr.P = currency;
    }

    return curr;
}

//makeExchange(3);