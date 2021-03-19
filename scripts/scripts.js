// $(() => {
window.onload = function() {

    // var timeline = newTimelineMax();
    var tl = gsap.timeline();

    // * * * * FRAME 1
    // Logo scale from zero to resting state. Hold the frame for a few beats. Lion logo fades out quickly and the red BG slides down to reveal the next frame
    tl.to(".logo-face", 1, {ease: Power1.easeIn, scale: 1, opacity: 1});
    tl.to(".logo-face", 1, {opacity: 1});
    tl.to(".logo-face", 0, {ease: Power2.easeOut, opacity: 0});

    // * * * * FRAME 2
    // Slow zoom of the image. After a few beats transition to the next frame by sliding up the bottom bar
    tl.to(".frame-2", 0.5, {opacity: 1, scale: 1.1});

    tl.to(".frame-1", 1, {ease: Power1.easeOut, top: 400}, "-=0.5");

    tl.to(".frame-2", .5, { opacity: 1});
    tl.to(".red-border-shape", .3, {ease: Power2.easeOut, y: 300});

    // * * * * FRAME 3
    // Animate each line individually. Hold on the frame for readability. Background slides up for F4
    tl.to(".frame-3", .5, {ease: Power1.easeIn, opacity: 1});

    tl.to(".frame-2", .1, {ease: Power2.easeOut, opacity: 0});

    tl.to(".frame-3-text", 0, {opacity: 1});
    tl.to(".frame-3-text-1", .5, {ease: Power1.easeIn, opacity: 1, x: 30, scale: 1});
    tl.to(".frame-3-text-2", .5, {ease: Power1.easeIn, opacity: 1, x: 30, scale: 1});
    tl.to(".frame-3-text-3", .5, {ease: Power1.easeIn, opacity: 1, x: 30, scale: 1});

    // * * * * FRAME 4
    // Fade in copy, line by line. Background image pans from F4-A image position and pan ends on F4-B image position. Image/copy crossfades to end.
    tl.to(".frame-3-text", .5, {opacity: 0});
    tl.to(".frame-4", 0, {opacity: 1});
    tl.to(".red-border-shape-top", 0, {opacity: 1});
    tl.to(".frame-4-text", .6, {ease: Power1.easeIn, opacity: 1, scale: 1});
    tl.to(".frame-4-images", 0, {opacity: 1});

    // IMAGES
    tl.to(".frame-4-image-1", .5, {ease: Linear.easeNone, opacity: 1});
    tl.to(".frame-4-image-1", 1.5, {opacity: 1});
    tl.to(".frame-4-image-1", 0, {opacity: 0});

    tl.to(".frame-4-image-2", .2, {ease: Linear.easeNone, opacity: 1});
    tl.to(".frame-4-image-2", 2, {opacity: 1});
    tl.to(".frame-4-image-2", 0, {opacity: 0});

    tl.to(".frame-4-text", 0, {opacity: 0});

    tl.to(".red-border-shape-top", 0, {opacity: 0});
    tl.to(".frame-5-red-border-shape-top", 0, {opacity: 1});

    // * * * * FRAME 5
    // Copy animates in followed by the button. Add an event listener that animates the CTA arrow when the user mouses over the unit
    tl.to(".frame-5", 1, {ease: Power1.easeIn, opacity: 1});
}

//  });

// * * * * LINKS
// MY GUY!
// https://www.skillshare.com/classes/Web-animations-using-HTMLCSS-and-JS-Greensock/81122839/projects?via=custom-lists

// Use this to make an animation ease
// https://greensock.com/ease-visualizer/

// Look at this one for inspo
// https://codepen.io/halvves/pen/bwmmWd?editors=1010