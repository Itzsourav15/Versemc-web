/* ==========================================
        VERSEMC PARTICLES
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof tsParticles === "undefined") {
        console.warn("tsParticles library not found.");
        return;
    }

    tsParticles.load({
        id: "particles-js",

        options: {

            fullScreen: {
                enable: false
            },

            fpsLimit: 120,

            background: {
                color: {
                    value: "transparent"
                }
            },

            particles: {

                number: {
                    value: 180,
                    density: {
                        enable: true,
                        area: 900
                    }
                },

                color: {
                    value: [
                        "#7C3AED",
                        "#00E5FF",
                        "#FFFFFF",
                        "#A855F7"
                    ]
                },

                shape: {
                    type: "circle"
                },

                opacity: {
                    value: {
                        min: 0.2,
                        max: 0.9
                    },
                    animation: {
                        enable: true,
                        speed: 0.5,
                        minimumValue: 0.1
                    }
                },

                size: {
                    value: {
                        min: 1,
                        max: 5
                    }
                },

                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: {
                        default: "out"
                    }
                },

                links: {
                    enable: true,
                    distance: 160,
                    color: "#7C3AED",
                    opacity: 0.18,
                    width: 1
                }

            },

            interactivity: {

                detectsOn: "window",

                events: {

                    onHover: {
                        enable: true,
                        mode: "grab"
                    },

                    onClick: {
                        enable: true,
                        mode: "push"
                    },

                    resize: true

                },

                modes: {

                    grab: {

                        distance: 180,

                        links: {
                            opacity: 0.8
                        }

                    },

                    push: {
                        quantity: 5
                    },

                    repulse: {
                        distance: 120
                    }

                }

            },

            detectRetina: true

        }

    });

});