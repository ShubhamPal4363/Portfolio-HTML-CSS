gsap.registerPlugin(MotionPathPlugin);

gsap.to("#star", {
  duration: 8,
  repeat: -1,
  ease: "none",
  motionPath: {
    path: "#ovalPath",
    align: "#ovalPath",
    // autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
});
