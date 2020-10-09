function ScrollTo(id, smooth, timeout) 
{ 
    //Timeout so panels have time to load
    if(timeout == undefined || isMobile())
    {
        setTimeout(() => 
        {  
            var elem = document.getElementById(id);

            if(smooth || smooth == undefined)
            {
                elem.scrollIntoView({behavior: 'smooth'});
            }
            else
            {
                elem.scrollIntoView();
            }
        }, 20);
    }
    else
    {
        setTimeout(() => 
        {  
            var elem = document.getElementById(id);

            if(smooth || smooth == undefined)
            {
                elem.scrollIntoView({behavior: 'smooth'});
            }
            else
            {
                elem.scrollIntoView();
            }
        }, timeout);
    }
}