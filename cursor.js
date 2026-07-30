/* ==========================================
        VERSEMC CURSOR
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    createCursor();

});

function createCursor(){

    // Hide default cursor
    document.body.style.cursor = "none";

    /* Main Cursor */

    const cursor = document.createElement("div");
    cursor.id = "cursor";

    /* Follower */

    const follower = document.createElement("div");
    follower.id = "cursorFollower";

    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    /* Cursor Style */

    Object.assign(cursor.style,{

        position:"fixed",
        width:"14px",
        height:"14px",
        background:"#7C3AED",
        borderRadius:"50%",
        pointerEvents:"none",
        zIndex:"999999",
        transform:"translate(-50%,-50%)",
        transition:"width .2s,height .2s,background .2s",
        boxShadow:"0 0 15px #7C3AED"

    });

    /* Follower Style */

    Object.assign(follower.style,{

        position:"fixed",
        width:"40px",
        height:"40px",
        border:"2px solid rgba(124,58,237,.7)",
        borderRadius:"50%",
        pointerEvents:"none",
        zIndex:"999998",
        transform:"translate(-50%,-50%)",
        transition:"all .15s linear"

    });

    let mouseX = 0;
    let mouseY = 0;

    let followX = 0;
    let followY = 0;

    document.addEventListener("mousemove",(e)=>{

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";

        createTrail(mouseX,mouseY);

    });

    function animate(){

        followX += (mouseX-followX)*0.18;
        followY += (mouseY-followY)*0.18;

        follower.style.left = followX+"px";
        follower.style.top = followY+"px";

        requestAnimationFrame(animate);

    }

    animate();

    /* Hover Effect */

    document.querySelectorAll("a,button,.btn,.buy-btn,.store-btn").forEach(el=>{

        el.addEventListener("mouseenter",()=>{

            follower.style.width="70px";
            follower.style.height="70px";

            cursor.style.width="18px";
            cursor.style.height="18px";

            cursor.style.background="#00E5FF";

        });

        el.addEventListener("mouseleave",()=>{

            follower.style.width="40px";
            follower.style.height="40px";

            cursor.style.width="14px";
            cursor.style.height="14px";

            cursor.style.background="#7C3AED";

        });

    });

    /* Click Animation */

    document.addEventListener("mousedown",()=>{

        cursor.style.transform="translate(-50%,-50%) scale(.7)";
        follower.style.transform="translate(-50%,-50%) scale(.8)";

    });

    document.addEventListener("mouseup",()=>{

        cursor.style.transform="translate(-50%,-50%) scale(1)";
        follower.style.transform="translate(-50%,-50%) scale(1)";

    });

}

/* ==========================================
        CURSOR TRAIL
========================================== */

function createTrail(x,y){

    const trail = document.createElement("div");

    Object.assign(trail.style,{

        position:"fixed",
        width:"8px",
        height:"8px",
        background:"#A855F7",
        borderRadius:"50%",
        left:x+"px",
        top:y+"px",
        pointerEvents:"none",
        zIndex:"999997",
        opacity:"0.8",
        transform:"translate(-50%,-50%)"

    });

    document.body.appendChild(trail);

    trail.animate(

        [

            {

                opacity:0.8,

                transform:"translate(-50%,-50%) scale(1)"

            },

            {

                opacity:0,

                transform:"translate(-50%,-50%) scale(0)"

            }

        ],

        {

            duration:500,

            easing:"ease-out"

        }

    );

    setTimeout(()=>{

        trail.remove();

    },500);

}