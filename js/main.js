const GITHUB_LINK = "https://github.com/Igkka"
const githubBtn = document.querySelector("#github-btn")
const msgBtn = document.querySelector("#tg-btn")
const tmeBtn = document.querySelector("#tme")
const tmelink = "https://t.me/Gubokkaa"

msgBtn.addEventListener("click",() => {
    window.open(tmelink,"_blank")
})

githubBtn.addEventListener("click",() => {
    window.open(GITHUB_LINK,"_blank")
})
tmeBtn.addEventListener("click",() => {
    window.open(tmelink,"_blank")
})

    document.addEventListener("DOMContentLoaded",() => {
            var typed = new Typed('#element', {
      strings: ['Web app','Landing page','Web game','Fullstack app',],
      typeSpeed: 50,
      loop:true,
      backDelay:1500,
      showCursor:false
    });
    })