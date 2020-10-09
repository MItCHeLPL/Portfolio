//Detect when using mobile
function isMobile()
{
    if( $('.mobile-only').css('display')=='none') 
    {
        return false;       
    }
    else
    {
        return true;
    }
}