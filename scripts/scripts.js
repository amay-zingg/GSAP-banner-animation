var creative = {}; //ad object

function init() {
  console.log("Ad Ready");
  creative.ad = document.getElementById("viewport");

  gsap.set(["#viewport", "#border"], { autoAlpha: 1 });
  gsap.set(["#template"], { alpha: 0.4 });

  frameOne();
}

function frameOne() {
  /* Set frame for action */
  gsap.set(["#GL_bg1-1", "#F1_image1-1"], { opacity: 1 });

  /* Frame animation */
  gsap.from(["#F1_image1-1"], {
    duration: 0.4,
    scale: 10,
    opacity: 0,
    ease: "back.out(0.7)",
  });

  var frameDelay = 1.5;
  /* Set frame exit transition */
  gsap.set(["#F1_image1-1"], { opacity: 0, delay: frameDelay });
  gsap.delayedCall(frameDelay, frameTwo);
}

function frameTwo() {
  /* Set frame for action */
  gsap.set(["#F2_image1-1"], { alpha: 1 });
  gsap.set(["#F2_image2-1"], { alpha: 1, rotation: 5 });

  /* Frame animation */
  gsap.from(["#F2_image1-1"], {
    duration: 5,
    scale: 1.1,
    force3D: false,
    rotation: 0.01,
  });

  var frameDelay = 2.5;
  /* Set frame exit transition */
  gsap.set(["#F2_image1-1", "#F2_image2-1"], { alpha: 0, delay: frameDelay });
  gsap.delayedCall(frameDelay, frameThree);
}

function frameThree() {
  /* Set frame for action */
  gsap.set(["#F3_text1-1"], { alpha: 1 });

  /* Frame animation */
  gsap.from(["#F3_text1-1"], { duration: 0.5, alpha: 0, x: -10 });

  var frameDelay = 1.5;
  /* Set frame exit transition */
  gsap.set(["#F3_text1-1"], { alpha: 0, delay: frameDelay });
  gsap.delayedCall(frameDelay, frameFour);
}

function frameFour() {
  /* Set frame for action */
  gsap.set(["#F4_text1-1", "#F4_text1-2", "#F4_image1-1"], { alpha: 1 });
  gsap.set(["#F4_image2-1"], { alpha: 1, rotation: -8 });

  /* Frame animation */
  gsap.to(["#F4_image1-1"], {
    duration: 5,
    scale: 1.1,
    force3D: false,
    rotation: 0.01,
  });

  var tl = gsap.timeline({});
  tl.from(["#F4_image2-1"], { duration: 0.5, y: 250 });
  tl.from(["#F4_text1-1"], { duration: 0.5, x: -3, alpha: 0 }, "-=0.3");
  tl.from(["#F4_text1-2"], { duration: 0.5, x: -3, alpha: 0 }, "-=0.3");

  var frameDelay = 3.5;
  /* Set frame exit transition */
  gsap.set(["#F4_text1-1", "#F4_text1-2", "#F4_image1-1", "#F4_image2-1"], {
    alpha: 0,
    delay: frameDelay,
  });
  gsap.delayedCall(frameDelay, frameFive);
}

function frameFive() {
  /* Set frame for action */
  gsap.set(
    [
      "#F5_logo1-1",
      "#F5_image1-1",
      "#F5_text1-1",
      "#F5_text1-2",
      "#F5_text1-3",
      ".cta",
      "#F5-ctaHover1",
    ],
    { alpha: 1 }
  );
  gsap.set(["#F5_image2-1"], { alpha: 1, rotation: -8 });

  gsap.to(["#F5_logo1-1", "#F5_image1-1"], {
    duration: 1,
    alpha: 1,
  });
  gsap.from(["#F5_image1-1"], {
    duration: 5,
    scale: 1.1,
    force3D: false,
    rotation: 0.01,
  });

  var tl = gsap.timeline({});
  tl.from(["#F5_text1-1"], { duration: 0.5, x: -3, alpha: 0 });
  tl.from(["#F5_text1-2"], { duration: 0.5, x: 3, alpha: 0 }, "-=0.1");
  tl.from(["#F5_text1-3"], { duration: 0.5, x: -3, alpha: 0 }, "-=0.1");
  tl.from(
    [".cta", "#F5-ctaHover1"],
    { duration: 0.5, x: -3, alpha: 0 },
    "+=0.5"
  );

  addEventListeners();
}

function addEventListeners() {
  creative.ad.addEventListener("mouseover", bannerOver);
}

function bannerOver(e) {
  creative.ad.removeEventListener("mouseover", bannerOver);
  /* Animate CTA */
  gsap.to(["#sheen"], {
    duration: 0.3,
    x: 200,
    repeat: 1,
    yoyo: true,
    onComplete: bannerOut,
  });
}

function bannerOut(e) {
  creative.ad.addEventListener("mouseover", bannerOver);
  gsap.set(["#sheen"], { x: -120 });
  /* CTA onComplete */
}