window.addEventListener("scroll", function () {

    var video = document.getElementById("video");
    var herstartervideo = document.getElementById("herstartervideo");
    console.log("er div #herstartervideo synlig?" + elFllVsbl( herstartervideo ) );

    if (elFllVsbl(herstartervideo)) {
        if (!(video.currentTime > 0)) {
            video.play();
        }
    } else {
        video.pause();
        video.currentTime = 0;
    }
}
                       )

function elFllVsbl(el) {
    return ( el.getBoundingClientRect().top>=0 && el.getBoundingClientRect().bottom<window.innerHeight);
}




// sidste video java

window.addEventListener("scroll", function () {

    var videomedlyd = document.getElementById("videomedlyd");
    var sidstevideo = document.getElementById("sidstevideo"); 
    console.log("er div #sidstevideo synlig?" + elFllVsbl( sidstevideo ) ); 

    if (elFllVsbl ( sidstevideo )) {
        if (!(videomedlyd.currentTime > 0)) {
            videomedlyd.play();
        }
    } else {
        videomedlyd.pause();
        videomedlyd.currentTime = 0;
    }
}
)

function elFllVsbl(el) {
    return ( el.getBoundingClientRect().top>=0 && el.getBoundingClientRect().bottom<window.innerHeight);
}



console.log("The Face in the Sky by Super_Sigil (c) copyright 2012 Licensed under a Creative Commons Attribution Noncommercial  (3.0) license. http://dig.ccmixter.org/files/Super_Sigil/40194"); 
