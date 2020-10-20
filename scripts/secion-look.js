function UpdateSection(sectionId, contentUrl, showBackground, slideAnim, addToHistory)
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
            LoadContent(sectionId, contentUrl, addToHistory);

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

function LoadContent(sectionId, contentUrl, addToHistory)
{
    if(addToHistory)
    {
        history.pushState(contentUrl, null, "?"+contentUrl);
    }

    $('#'+sectionId).load(contentUrl);  
}

function InitialLoad()
{
    var search = window.location.search;

    //main page
    if(search == "")
    {
        UpdateSection('left', 'about-me.html', true, true, false); 
        UpdateSection('right', 'project-list.html', false, false, false);
        ShowBackToAboutMe(false);
    }
    //project page
    else
    {
        var contentUrl = search.substring(1, 1 + search.length);

        history.pushState(contentUrl, null, search);

        UpdateSection('left', 'project-list.html', false, false, false); 
        UpdateSection('right', contentUrl, true, true, false);
        ShowBackToAboutMe(true);
        ScrollTo('projectTop', true, 450);
    }
}

//Open in new tab with middle click
function OpenInNewTab(url)
{
    var e = window.event;
    if(e.which==2)
    {
        window.open('?' + url, '_blank');
    }
}

//On load
window.onload = function()
{
    InitialLoad();

    if(!isMobile())
    {
        //Slide in on load
        SlideIn(500, 700);
    }
};


//On history back/forward
window.addEventListener('popstate', function(e){
    var character = e.state;

    //Project page
    if (character != null) 
    {
        UpdateSection('left', 'project-list.html', false, false, false); 
        UpdateSection('right', character, true, true, false);
        ShowBackToAboutMe(true);
        ScrollTo('projectTop', true, 450);
    } 
    //Main page
    else
    {
        UpdateSection('left', 'about-me.html', true, true, false); 
        UpdateSection('right', 'project-list.html', false, false, false); 
        ShowBackToAboutMe(false);
        ScrollTo('project-listTop', true, 450);
    }
});