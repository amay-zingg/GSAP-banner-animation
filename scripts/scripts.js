TweenMax.to($('.circle'), 2, {x: 150, y: 150, borderRadius: '40%' });

// * * * * UNDERSTANDING LABELS
// Used labels to make animations execute at the same time
var tlanimation3 = new TimelineMax();

tlanimation3.to('.circle2', 1, {x: 100, ease: Elastic.easeOut}, 'circleRectangle')
.to('.square2', 1, {x: 100, ease: Back.easeIn})
.to('.rectangle2', 1, {x: 100, ease: Elastic.easeOut}, 'circleRectangle');