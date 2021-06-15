setInterval(function(){
    var skipButton=document.getElementsByClassName("ytp-ad-skip-button");
    if(skipButton != undefined && skipButton.length > 0)
    {
        console.log("Ad detected");
        skipButton[0].click()
    }    
    var first=document.getElementsByClassName("style-scope ytd-display-ad-renderer yt-simple-endpoint");
    if(first != undefined && first.length > 0)
    {
        console.log("1 detected");
        first.style.display = "block";
    }
 
    var a=document.getElementsByClassName("yt-simple-endpoint style-scope ytd-action-companion-ad-renderer");
    if(a != undefined && a.length > 0)
    {
        console.log("prime Ad detected");
        a[0].remove();
    }
    var b=document.getElementsByClassName("style-scope ytd-companion-slot-renderer");
    if(b != undefined && b.length > 0)
    {
        for(var i=0;i<b.length ;i++)
        {

            b[i].remove();
        }
        
    }
    if (document.getElementsByClassName('ytp-ad-overlay-close-button').length) {
        for (let index = 0; index < document.getElementsByClassName('ytp-ad-overlay-close-button').length; index++) {
            document.getElementsByClassName('ytp-ad-overlay-close-button')[index].click()
        }
    }
},3000)