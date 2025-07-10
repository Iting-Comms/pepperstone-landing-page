var CLICK_TO_LANDING = false;//true: location.href, false: alert

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
        targetLanding='https://secure.pepperstone.com/register?legalEntity=individual&locale=tw';
    }
    
    if (location.search) {
        if(targetLanding.indexOf('?') > -1){
            targetLanding = targetLanding +'&'+ location.search.substring(1);
        }else{
            targetLanding = targetLanding + location.search;
        }
    }
    
    if(CLICK_TO_LANDING){
        location.href = targetLanding
    }else{
        alert(targetLanding)
    }   
}