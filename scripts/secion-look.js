function UpdateSection(sectionId, contentUrl, showBackground)
{
    //change background by swapping class
    let classList = document.getElementById(sectionId).classList;

    if(showBackground && !classList.contains("sectionBackground"))
    {
        classList.add("sectionBackground");
    }
    else if(classList.contains("sectionBackground"))
    {
        classList.remove("sectionBackground");
    }

    //#TODO# add animation

    //load section content
    $('#'+sectionId).load(contentUrl);
}