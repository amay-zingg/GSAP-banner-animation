// $(() => {
window.onload = function() {

    // var timeline = newTimelineMax();
    var timeline = gsap.timeline();

    // * * * * FRAME 1
    // Logo scale from zero to resting state. Hold the frame for a few beats. Lion logo fades out quickly and the red BG slides down to reveal the next frame
    timeline.to(".logo-face", 1, {opacity: 1, ease: Power1.easeIn, scale: 1})

    // * * * * FRAME 2
    // Slow zoom of the image. After a few beats transition to the next frame by sliding up the bottom bar
    timeline.to(".red-border-shape", 1, {ease: Power1.easeIn, y: 1})
    timeline.to(".frame-2", 1, {ease: Power1.easeIn, opacity: 1})
    timeline.to(".logo-face", 1, {opacity: 0})
    
    // * * * * FRAME 3
    // Animate each line individually. Hold on the frame for readability. Background slides up for F4
    timeline.to(".frame-2", 1, {ease: Power1.easeIn, opacity: 0})
    timeline.to(".frame-3-text-1", 1, {ease: Power1.easeIn, opacity: 1, x: 1})
    timeline.to(".frame-3-text-2", 1, {ease: Power1.easeIn, opacity: 1, x: 1})
    timeline.to(".frame-3-text-3", 1, {ease: Power1.easeIn, opacity: 1, x: 1})

    // * * * * FRAME 4
    // Fade in copy, line by line. Background image pans from F4-A image position and pan ends on F4-B image position. Image/copy crossfades to end.

    // * * * * FRAME 5
    // Copy animates in followed by the button. Add an event listener that animates the CTA arrow when the user mouses over the unit
}
//  });

// * * * * LINKS
// MY GUY!
// https://www.skillshare.com/classes/Web-animations-using-HTMLCSS-and-JS-Greensock/

// Use this to make an animation ease
// https://greensock.com/ease-visualizer/