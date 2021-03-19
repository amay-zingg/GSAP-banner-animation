// $(() => {
window.onload = function() {

    // var timeline = newTimelineMax();
    var tl = gsap.timeline();

    // * * * * FRAME 1
    // Logo scale from zero to resting state. Hold the frame for a few beats. Lion logo fades out quickly and the red BG slides down to reveal the next frame
    tl.to(".logo-face", 1, {opacity: 1, ease: Power1.easeIn, scale: 1})

    // * * * * FRAME 2
    // Slow zoom of the image. After a few beats transition to the next frame by sliding up the bottom bar
    tl.to(".red-border-shape", 1, {ease: bounce.out, y: 1})
    tl.to(".frame-2", 1, {ease: Power1.easeIn, opacity: 1})
    tl.to(".logo-face", 1, {opacity: 0})
    
    // * * * * FRAME 3
    // Animate each line individually. Hold on the frame for readability. Background slides up for F4
    tl.to(".frame-2", 1, {ease: Power1.easeIn, opacity: 0})
    tl.to(".frame-3-text-1", 1, {ease: Power1.easeIn, opacity: 1, x: 1})
    tl.to(".frame-3-text-2", 1, {ease: Power1.easeIn, opacity: 1, x: 1})
    tl.to(".frame-3-text-3", 1, {ease: Power1.easeIn, opacity: 1, x: 1})

    // * * * * FRAME 4
    // Fade in copy, line by line. Background image pans from F4-A image position and pan ends on F4-B image position. Image/copy crossfades to end.
    tl.to(".frame-3-text-1", {opacity: 0})
    tl.to(".frame-3-text-2", {opacity: 0})
    tl.to(".frame-3-text-3", {opacity: 0})
    tl.to(".red-border-shape-top", 1, {ease: bounce.out, y: 1})
    tl.to(".frame-4-text-1", .5, {ease: none, opacity: 1, x: 1})
    tl.to(".frame-4-text-2", .5, {ease: none, opacity: 1, x: 1})
    tl.to(".frame-4-image-2", 3.5, {ease: Power3.out, opacity: 1})
   

    // * * * * FRAME 5
    // Copy animates in followed by the button. Add an event listener that animates the CTA arrow when the user mouses over the unit
}
//  });

// * * * * LINKS
// MY GUY!
// https://www.skillshare.com/classes/Web-animations-using-HTMLCSS-and-JS-Greensock/81122839/projects?via=custom-lists

// Use this to make an animation ease
// https://greensock.com/ease-visualizer/