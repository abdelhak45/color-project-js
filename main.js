let cssTitele =document.getElementById("cssTitele")
let cssp =document.getElementById("cssp")
let cssBody =document.getElementById("cssBody")

let btn = document.getElementById('btn')
let p = document.getElementById('p')
let bigParent = document.getElementById('bigParent')


btn.onclick = () => {

    let color = Math.random().toString(16).slice( 2 , 8)

    bigParent.style.background = '#'+ color;
    p.innerHTML ='#'+ color
    cssBody.innerHTML = color
    localStorage.Coleur = color
    localStorage.para = color
}

if(localStorage.Coleur && localStorage.para){
    bigParent.style.background = '#'+ localStorage.Coleur;
    p.innerHTML ='#'+ localStorage.Coleur
    cssBody.innerHTML = localStorage.Coleur
}

// =================================================================



let btn2 = document.getElementById('btn2')
let p2 = document.getElementById('p2')
let titele = document.getElementById('titele')

btn2.onclick = () => {

    let titeleColeur = Math.random().toString(16).slice( 2 , 8)

    titele.style.color = '#'+ titeleColeur;

    p2.innerHTML ='#'+ titeleColeur
    cssTitele.innerHTML = titeleColeur
    localStorage.titeleColeur = titeleColeur

    localStorage.titelepara = titeleColeur

}
if(localStorage.titeleColeur && localStorage.titelepara){
    titele.style.color = '#'+ localStorage.titeleColeur;
    p2.innerHTML ='#'+ localStorage.titeleColeur
    cssTitele.innerHTML = localStorage.titeleColeur
}

// =================================================================



let btn3 = document.getElementById('btn3')
let p3 = document.getElementById('p3')
let text = document.getElementById('text')



btn3.onclick = () => {

    let textColeur = Math.random().toString(16).slice( 2 , 8)

    text.style.color = '#'+ textColeur;

    p3.innerHTML ='#'+ textColeur
    cssp.innerHTML = textColeur
    localStorage.textColeur = textColeur

    localStorage.textpara = textColeur

}
if(localStorage.textColeur && localStorage.textpara){
    text.style.color = '#'+ localStorage.textColeur;
    p3.innerHTML ='#'+ localStorage.textColeur
    cssp.innerHTML = localStorage.textColeur
}
// =======================================================


let btn4 =document.getElementById("btn4")
let code =document.getElementById("code")

btn4.onclick= ()=>{
    
    if (btn4.innerHTML === "Show Code") {
        code.style.display = "block"
        btn4.innerHTML = "Hide Code"
        window.scroll(0,800);
    }else if (btn4.innerHTML === "Hide Code"){
        code.style.display = "none"
        btn4.innerHTML = "Show Code"
        window.scroll(0,0);
    }
    
}

// =====================================================


let pre  = document.getElementById("pre").innerText = `    
<div id="parent">
    <div class="row">
        <div id="titele">
            <h1 class="h">Hi, I'm </h1>
            <h1 class="h">ABDELHAK ACHTOUI</h1>
        </div>
        <p class="p" id="text">Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Autem cum necessitatibus 
        assumenda temporibus repellendus! Vitae labore alias iure 
        quis similique! In, necessitatibus? Temporibus aut nesciunt 
        inventore quia enim ipsum eveniet.</p>
    </div>
</div>`


// ======================================
let up = document.getElementById('up')

window.onscroll = ()=>{

    if (window.scrollY >= 500) {
        up.style.display = "block"
    }else{
        up.style.display = "none"

    }
}

up.onclick = ()=>{
    window.scrollTo({
        top: 0,
        behavior :"smooth"
    })
}





// localStorage.clear()





