//Detect when using mobile
function isMobile()
{
    if( $('.mobile-only').css('display')=='none' || $('.mobile-only').css('visibility')=='hidden') 
    {
        return false;       
    }
    else
    {
        return true;
    }
}