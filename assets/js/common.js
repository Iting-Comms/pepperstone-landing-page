function clickFunction(locale){
    //my: https://secure.pepperstone.com/register?legalEntity=individual&locale=en
    //sg: https://secure.pepperstone.com/register?legalEntity=individual&locale=en
    //th: https://secure.pepperstone.com/register?legalEntity=individual&locale=th
    //vn: https://secure.pepperstoneworld.com/register?legalEntity=individual&locale=vi
    //hk: https://secure.pepperstone.com/register?legalEntity=individual&locale=tw
    //tw: https://secure.pepperstone.com/register?legalEntity=individual&locale=tw

    var targetLanding='https://secure.pepperstone.com/register?legalEntity=individual&locale=en';//default     
    if(locale === 'th'){
        targetLanding='https://secure.pepperstone.com/register?legalEntity=individual&locale=th';
    }else if(locale === 'vn'){
        targetLanding='https://secure.pepperstoneworld.com/register?legalEntity=individual&locale=vi';
    }else if(locale === 'hk'||locale === 'tw'){
        targetLanding='https://secure.pepperstone.com/register?legalEntity=individual&locale=zh-TW';
    }
    
    try{
        var queryString = location.search;
        if (queryString !== '') {
            if(targetLanding.indexOf('?') > -1){
                targetLanding = targetLanding +'&'+ location.search.substring(1);
            }else{
                targetLanding = targetLanding + location.search;
            }
            
            if(queryString.indexOf('__test__=true') > -1){
                alert(targetLanding)
                return;
            }
        }
        
        location.href = targetLanding
    }catch(e){
        console.log(e)
        location.href = targetLanding
    }
}