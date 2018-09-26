// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const answer={};
    if (currency<=0)
    {
        return answer;
    }
    if (currency>10000)
    {
        answer['error']="You are rich, my friend! We don't have so much coins for exchange";
        return answer;
    }
    if (currency>=50)
    {   
        answer['H']=Math.trunc(currency/50);
        currency%=50;
    }
    if (currency>=25)
    {
        answer['Q']=Math.trunc(currency/25);
        currency%=25;
    }
    if (currency>=10)
    {
        answer['D']=Math.trunc(currency/10);
        currency%=10;
    }    
    if (currency>=5)
    {
        answer['N']=Math.trunc(currency/5);
        currency%=5;
    }
    if (currency<5 && currency!==0)
    {
        answer['P']=currency;
    }

    return answer;
}