
const cursor1 = new MouseFollower({
    el: null,
    container: document.body,
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
    mediaBoxClassName: 'mf-cursor-media-box',
    iconSvgClassName: 'mf-svgsprite',
    iconSvgNamePrefix: '-',
    iconSvgSrc: '',
    dataAttr: 'cursor',
    hiddenState: '-hidden',
    textState: '-text',
    iconState: '-icon',
    activeState: '-active',
    mediaState: '-media',
    stateDetection: {
        '-pointer': 'a,button',
        '-hidden': 'iframe'
    },
    visible: true,
    visibleOnState: false,
    speed: 1,
    ease: 'expo.out',
    overwrite: true,
    skewing: 0,
    skewingText: 2,
    skewingIcon: 2,
    skewingMedia: 1,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15,
    stickDelta: 0.15,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
    hideMediaTimeout: 300
});


var tl = gsap.timeline();
tl.to("#log", {y: -5,stagger:.2, duration: 0.3});
tl.to("#men", {y: -5, duration: 0.5});
tl.to("#anim1", {y: -7,stagger:.2, duration: 1});
tl.to("#anim2", {y: -7,opacity:0.64, duration: 1});
tl.to("#anim3", {y: -7, duration: 0.4});
tl.to("#avail", {y:5,opacity:0.64,stagger:0.2, duration: 0.4});
tl.to("#may", {y:5,opacity:0.64, duration: 0.3});
tl.to("#currently", {y:5,opacity:0.64,stagger:0.2, duration: 0.2});
tl.to("#protopie", {y:5,opacity:0.64, duration: 0.2});
tl.to("#arrows", {y:5,opacity:0.64, duration: 0.1});


let animate=document.querySelector(".scale")
animate.addEventListener("mouseenter",()=>{
    animate.classList.add("scale");
})
animate.addEventListener("mouseleave",()=>{
   animate.style.transition="all 1.2s";
    animate.classList.remove("scale")
})


let animate1=document.querySelector(".scale1")
animate1.addEventListener("mouseenter",()=>{
    animate1.classList.add("scale");
})
animate1.addEventListener("mouseleave",()=>{
   animate1.style.transition="all 1.2s";
    animate1.classList.remove("scale")
})

let animate2=document.querySelector(".scale2")
animate2.addEventListener("mouseenter",()=>{
    animate2.classList.add("scale");
})
animate2.addEventListener("mouseleave",()=>{
   animate2.style.transition="all 1.2s";
    animate2.classList.remove("scale")
})





const d = new Date();
let hour = d.getHours();
let minute=d.getMinutes();
let seconds=d.getSeconds();

console.log(hour,minute,seconds);


const H=document.querySelector("#hours");
H.innerText=hour;

const M=document.querySelector("#minutes");
M.innerText=minute;

const S=document.querySelector("#second");
S.innerText=seconds;