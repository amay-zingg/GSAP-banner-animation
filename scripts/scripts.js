// * * * * I tried to follow the instructions, it didn't always work, so this is what I came up with!

window.onload = function() {

    var tl = new TimelineMax({repeat: 3, repeatDelay: 3});

    // * * * * FRAME 1
    // Logo scale from zero to resting state. Hold the frame for a few beats. Lion logo fades out quickly and the red BG slides down to reveal the next frame
    tl.to(".logo-face", 2, {ease: Power1.easeInOut, scale: 1, opacity: 1});
    tl.to(".logo-face", 0.5, {opacity: 1}, "-=0.5");
    tl.to(".logo-face", 0.5, {ease: Power4.easeOut, opacity: 0});

    tl.to(".floating-red-bg", 0.1, {ease: Power1.easeIn, opacity: 1});
    
    // * * * * FRAME 2
    // Slow zoom of the image. After a few beats transition to the next frame by sliding up the bottom bar
    tl.to(".frame-2", 0.1, {ease: Power1.easeIn, opacity: 1});
    
    tl.to(".floating-red-bg", 1.5, {top: 300});

    tl.to(".frame-2", 1.5, {ease: Power1.easeOut, opacity: 0, scale: 2});

    // * * * * FRAME 3
    // Animate each line individually. Hold on the frame for readability. Background slides up for F4
    tl.to(".frame-3", 0.2, {ease: Power1.easeIn, opacity: 1});
    tl.to(".frame-3-text-1", 0.5, {ease: Power1.easeIn, opacity: 1});
    tl.to(".frame-3-text-2", 1, {ease: Power1.easeIn, opacity: 1});
    tl.to(".frame-3-text-3", 1, {ease: Power1.easeIn, opacity: 1});

    tl.to(".frame-3-text", 1.5, {ease: Power1.easeOut, opacity: 0});

    tl.to(".frame-3", 0.1, {opacity: 0});

    // * * * * FRAME 4
    // Fade in copy, line by line. Background image pans from F4-A image position and pan ends on F4-B image position. Image/copy crossfades to end.
    tl.to(".frame-4", 0.2, {ease: Power1.easeIn,opacity: 1});

    tl.to(".frame-4-text", 0.2, {ease: Power1.easeIn, opacity: 1});
    tl.to(".frame-4-text-1", 1.2, {ease: Power1.easeIn, opacity: 1});
    tl.to(".frame-4-text-2", 1.2, {ease: Power1.easeIn, opacity: 1});

    tl.to(".frame-4-images", 0.5, {opacity: 1}, "-=0.5");
    tl.to(".red-border-shape-top", 0.5, {ease: Power1.easeIn, opacity: 1});

    tl.to(".frame-4-image-1", 1.5, {ease: Power1.easeOut, opacity: 1});
    tl.to(".frame-4-image-2", 1, {opacity: 1, left: -300});
    tl.to(".frame-4-image-2", 0.5, {opacity: 1});

    tl.to(".frame-4-text", 1, {ease: Power1.easeOut, opacity: 0});

    tl.to(".frame-4", 0.2, {ease: Power1.easeOut, opacity: 0});
    tl.to(".red-border-shape-top", 0.2, {ease: Power1.easeOut, opacity: 0});
    tl.to(".frame-4-images", 0.5, {ease: Power1.easeOut, opacity: 0});

    // * * * * FRAME 5
    // Copy animates in followed by the button. Add an event listener that animates the CTA arrow when the user mouses over the unit
    tl.to(".frame-5", 0.5, {ease: Power1.easeIn, opacity: 1}, "-=0.5");
    tl.to(".CTA-button", 1, {ease: Power1.easeOut, scale: 1}, "-=0.5");
}

// * * * * LINKS
// MY GUY!
// https://www.skillshare.com/classes/Web-animations-using-HTMLCSS-and-JS-Greensock/81122839/projects?via=custom-lists

// Use this to make an animation ease
// https://greensock.com/ease-visualizer/

// Look at this one for inspo
// https://codepen.io/halvves/pen/bwmmWd?editors=1010