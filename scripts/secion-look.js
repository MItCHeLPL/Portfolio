function UpdateSection(sectionId, contentUrl, showBackground, slideAnim)
{
    //animation duration
    let animTime = 400;
    let animTimeout = animTime;

    //disable animation when on mobile
    if(isMobile())
    {
        animTimeout = 0;
    }

    //Slide Out
    if(slideAnim && !isMobile())
    {
        SlideOut(animTime, 0);
    }

    //After slide out
    setTimeout
    (
        function() 
        {
            //Get background by swapping class
            let classList = document.getElementById(sectionId).classList;
        
            //load section content
            $('#'+sectionId).load(contentUrl);

            //Change background
            if(showBackground && !classList.contains("sectionBackground"))
            {
                classList.add("sectionBackground"); 
            }
            else if(!showBackground && classList.contains("sectionBackground"))
            {
                classList.remove("sectionBackground"); 
            }
        }, animTimeout
    );
    
    //Slide In
    if(slideAnim && !isMobile())
    {
        SlideIn(animTime, 0);
    }
}

function SlideOut(duration, timeout)
{
    //Timeout
    setTimeout
    (
        function()
        {
            //Slide
            $('#left').css(
                'margin-right', '0'
            );
            $('#right').css(
                'margin-left', '0'
            );
            
            //Force scroll position
            disableXScroll();

            //Animate sliding in
            $('#left').animate({
                marginRight: '100vw',
                opacity: '0'
            }, duration);

            $('#right').animate({
                marginLeft: '100vw',
                opacity: '0'
            }, duration);
        }, timeout
    );
}

function SlideIn(duration, timeout)
{
    //Timeout
    setTimeout
    (
        function()
        {
            //Slide
            $('#left').css(
                'margin-right', '100vw'
            );
            $('#right').css(
                'margin-left', '100vw'
            );

            //Force scroll position
            disableXScroll();
    
            //Animate sliding in
            $('#left').animate({
                marginRight: 0,
                opacity: '1'
            }, duration);
    
            $('#right').animate({
                marginLeft: 0,
                opacity: '1'
            }, duration);
        }, timeout
    );
}

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

function disableXScroll() 
{ 
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = 0;

    // if any scroll is attempted, set this to the previous value 
    window.onscroll = function() 
    { 
        window.scrollTo(scrollLeft, scrollTop); 
    }; 
}

function ShowBackToAboutMe(showAboutMeButton)
{
    if(showAboutMeButton)
    {
        document.getElementById('showAboutMe').style.display = "block";
    }
    else
    {
        document.getElementById('showAboutMe').style.display = "none";
    }
}

//Slide in on load
window.onload = SlideIn(500, 700);