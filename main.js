/* ==========================================
            VERSEMC MAIN JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initParticles();
    revealElements();
    animateCounters();
    navbarEffect();
    smoothScroll();
    createBackToTop();

});

/* ==========================================
            PARTICLES
========================================== */

function initParticles(){

    if(typeof tsParticles==="undefined") return;

    tsParticles.load("particles-js",{

        background:{
            color:"transparent"
        },

        fpsLimit:60,

        particles:{

            number:{
                value:120
            },

            color:{
                value:[
                    "#7C3AED",
                    "#00E5FF",
                    "#FFFFFF"
                ]
            },

            links:{
                enable:true,
                distance:150,
                color:"#7C3AED",
                opacity:0.15
            },

            move:{
                enable:true,
                speed:1
            },

            opacity:{
                value:0.6
            },

            size:{
                value:{
                    min:1,
                    max:4
                }
            }

        }

    });

}

/* ==========================================
            REVEAL ANIMATION
========================================== */

function revealElements(){

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("fade-up");

            }

        });

    },{

        threshold:.2

    });

    document.querySelectorAll(

        ".feature-card,.rank-card,.info-box,.stat-card,.profile-card"

    ).forEach(card=>{

        observer.observe(card);

    });

}

/* ==========================================
            COUNTERS
========================================== */

function animateCounters(){

    const counters=document.querySelectorAll("[data-count]");

    counters.forEach(counter=>{

        const target=+counter.dataset.count;

        let value=0;

        const speed=Math.max(1,target/150);

        function update(){

            value+=speed;

            if(value<target){

                counter.innerText=Math.floor(value);

                requestAnimationFrame(update);

            }else{

                counter.innerText=target;

            }

        }

        update();

    });

}

/* ==========================================
            NAVBAR EFFECT
========================================== */

function navbarEffect(){

    const nav=document.querySelector(".navbar");

    if(!nav) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>50){

            nav.style.background="rgba(8,8,18,.85)";
            nav.style.backdropFilter="blur(20px)";
            nav.style.boxShadow="0 0 20px rgba(0,0,0,.4)";

        }

        else{

            nav.style.background="rgba(8,8,18,.35)";
            nav.style.boxShadow="none";

        }

    });

}

/* ==========================================
            SMOOTH SCROLL
========================================== */

function smoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(

                this.getAttribute("href")

            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}

/* ==========================================
            BACK TO TOP
========================================== */

function createBackToTop(){

    const btn=document.createElement("button");

    btn.innerHTML="⬆";

    btn.id="backToTop";

    document.body.appendChild(btn);

    Object.assign(btn.style,{

        position:"fixed",
        right:"25px",
        bottom:"25px",
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        border:"none",
        background:"#7C3AED",
        color:"#fff",
        fontSize:"20px",
        cursor:"pointer",
        display:"none",
        zIndex:"9999",
        boxShadow:"0 0 20px #7C3AED"

    });

    window.addEventListener("scroll",()=>{

        btn.style.display=

        window.scrollY>300

        ?"block"

        :"none";

    });

    btn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* ==========================================
            BUTTON EFFECT
========================================== */

document.querySelectorAll(".btn,.buy-btn,.store-btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});

/* ==========================================
            PAGE LOADER
========================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("page-load");

});

/* ==========================================
            END
========================================== */