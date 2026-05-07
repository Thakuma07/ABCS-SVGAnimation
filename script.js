import gsap from "gsap";

const config = {
    smoothing: 0.1,
    movementThreshold: 0.01,
    sizeFromSpeed: 0.2,
    expandMultiplier: 2,
    expandTime: 2,
    expandEase: "power1.inOut",
    dissolveStart: 2,
    dissolveTime: 3,
    dissolveEase: "power3.in",
};

const heroSection = document.querySelector(".hero");
const smudgeSVG = document.querySelector(".smudge-revealer");
const smudgeContainer = document.querySelector(".smudge-blobs");

const pointer = { x: 0, y: 0 };
const smoothPointer = { x: 0, y: 0 };
let hasStarted = false;

function onPointerMove(x, y) {
    if (!hasStarted) {
        pointer.x = smoothPointer.x = x;
        pointer.y = smoothPointer.y = y;
        hasStarted = true;
        return;
    }

    pointer.x = x;
    pointer.y = y;
}

heroSection.addEventListener("mousemove", function (e) {
    onPointerMove(e.pageX, e.pageY);
});

heroSection.addEventListener(
    "touchstart",
    function (e) {
        e.preventDefault();
        onPointerMove(e.touches[0].pageX, e.touches[0].pageY);
    },
    { passive: false },
);

heroSection.addEventListener(
    "touchmove",
    function (e) {
        e.preventDefault();
        onPointerMove(e.touches[0].pageX, e.touches[0].pageY);
    },
    { passive: false },
);

function matchSVGToViewport() {
    smudgeSVG.style.width = window.innerWidth + "px";
    smudgeSVG.style.height = window.innerHeight + "px";
}

matchSVGToViewport();
window.addEventListener("resize", matchSVGToViewport);

function stampSmudgeAt(x, y, radius) {
    const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle",
    );

    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", "#fff");

    smudgeContainer.prepend(circle);

    const animatedRadius = { current: radius };

    const timeline = gsap.timeline({
    onUpdate() {
        circle.setAttribute("r", Math.max(0, animatedRadius.current));
    },

    onComplete() {
        timeline.kill();
        circle.remove();
    },
});

    timeline.to(animatedRadius, {
        current: radius * config.expandMultiplier,
        duration: config.expandTime,
        ease: config.expandEase,
    });

    timeline.to(
        animatedRadius,
        {
            current: 0,
            duration: config.dissolveTime,
            ease: config.dissolveEase,
        },
        config.dissolveStart,
    );
}

function update() {
  if (hasStarted) {
    smoothPointer.x += (pointer.x - smoothPointer.x) * config.smoothing;
    smoothPointer.y += (pointer.y - smoothPointer.y) * config.smoothing;

    const speed = Math.hypot(
      pointer.x - smoothPointer.x,
      pointer.y - smoothPointer.y,
    );

    if (speed > config.movementThreshold) {
      stampSmudgeAt(
        smoothPointer.x,
        smoothPointer.y,
        speed * config.sizeFromSpeed,
      );
    }
  }

  requestAnimationFrame(update);
}

requestAnimationFrame(update);