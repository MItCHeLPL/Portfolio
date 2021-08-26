//Detect when using mobile
function ShowIframe(callerID, iframeId)
{
    if(!isMobile()) 
    {
        callerID.style.display = "none";
        document.getElementById(iframeId).style.display = "block";     
    }
}