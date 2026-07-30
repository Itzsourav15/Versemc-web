/* ==========================================
        VERSEMC ANIMATIONS.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initRevealAnimations();
    initParallax();
    initHeroAnimation();
    initMouseGlow();
    initFloatingCards();

});

/* ==========================================
        SCROLL REVEAL
========================================== */

function initRevealAnimations() {

    const elements = document.querySelectorAll(
        ".feature-card, .rank-card, .info-box, .stat-card, .profile-card, .hero, .page-title"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition =
                    "all 0.8s cubic-bezier(.17,.67,.38,.99)";

            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach((element) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(60px)";

        observer.observe(element);

    });

}

/* ==========================================
        STAGGER ANIMATION
========================================== */

document.querySelectorAll(".rank-card").forEach((card, index) => {

    card.style.animationDelay = `${index * 0.15}s`;

});

document.querySelectorAll(".feature-card").forEach((card, index) => {

    card.style.animationDelay = `${index * 0.1}s`;

});

/* ==========================================
        HERO TITLE GLOW
========================================== */

function initHeroAnimation() {

    const title = document.querySelector(".hero h1");

    if (!title) return;

    let glow = true;

    setInterval(() => {

        if (glow) {

            title.style.textShadow =
                "0 0 20px #7C3AED,0 0 60px #00E5FF";

        } else {

            title.style.textShadow =
                "0 0 15px #7C3AED";

        }

        glow = !glow;

    }, 2000);

}

/* ==========================================
        PARALLAX
========================================== */

function initParallax() {

    window.addEventListener("scroll", () => {

        const scrolled = window.scrollY;

        document.body.style.backgroundPosition =
            `center ${scrolled * 0.15}px`;

    });

}

/* ==========================================
        FLOATING CARDS
========================================== */

function initFloatingCards() {

    const cards = document.querySelectorAll(

        ".feature-card,.rank-card,.info-box"

    );

    cards.forEach((card, index) => {

        card.animate(

            [

                {

                    transform: "translateY(0px)"

                },

                {

                    transform: "translateY(-8px)"

                },

                {

                    transform: "translateY(0px)"

                }

            ],

            {

                duration: 3500 + index * 300,

                iterations: Infinity,

                easing: "ease-in-out"

            }

        );

    });

}

/* ==========================================
        MOUSE GLOW
========================================== */

function initMouseGlow() {

    const glow = document.createElement("div");

    glow.className = "mouse-glow";

    document.body.appendChild(glow);

    Object.assign(glow.style, {

        position: "fixed",
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        background:
            "radial-gradient(circle, rgba(124,58,237,.20), transparent 70%)",
        pointerEvents: "none",
        transform: "translate(-50%,-50%)",
        zIndex: "999",
        transition: "transform .05s linear"

    });

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}

/* ==========================================
        BUTTON RIPPLE
========================================== */

document.querySelectorAll(".btn,.buy-btn,.store-btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const size = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width = size + "px";
        circle.style.height = size + "px";

        circle.style.left =
            e.offsetX - size / 2 + "px";

        circle.style.top =
            e.offsetY - size / 2 + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});

/* ==========================================
        PAGE LOAD
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

/* ==========================================
        END
========================================== */