/* ==========================================
        Dalal Portfolio
        JavaScript
========================================== */

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// =========================
// Active Navbar
// =========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// =========================
// Scroll Reveal
// =========================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(

".card,.experience-card,.project-card,.certificate,.skills-grid div,.contact-grid div"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// =========================
// Navbar Shadow
// =========================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>60){

        header.style.boxShadow="0 12px 30px rgba(0,0,0,.35)";

    }else{

        header.style.boxShadow="none";

    }

});

// =========================
// Progress Bar
// =========================

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.width="0";
progress.style.height="4px";
progress.style.background="#22D3EE";
progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const total=document.documentElement.scrollHeight-window.innerHeight;

    const current=(window.scrollY/total)*100;

    progress.style.width=current+"%";

});

// =========================
// Back To Top
// =========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#22D3EE";
topBtn.style.color="#000";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// =========================
// Typing Effect
// =========================

const typing=document.querySelector(".hero h2");

const words=[

"Information Systems Graduate",

"Cybersecurity",

"Governance",

"Risk Management",

"Technology"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function type(){

    const current=words[wordIndex];

    if(!deleting){

        typing.textContent=current.substring(0,charIndex++);

        if(charIndex>current.length){

            deleting=true;

            setTimeout(type,1200);

            return;

        }

    }else{

        typing.textContent=current.substring(0,charIndex--);

        if(charIndex<0){

            deleting=false;

            wordIndex=(wordIndex+1)%words.length;

        }

    }

    setTimeout(type,deleting?45:90);

}

type();

// =========================
// Console Message
// =========================

console.log("%cWelcome to Dalal Portfolio 🚀","color:#22D3EE;font-size:18px;font-weight:bold;");