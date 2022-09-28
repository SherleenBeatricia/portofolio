let state=false

function toogleNavbarNav(){
    let nav=document.getElementById('navbar-nav')
    if(state==false){ //nav blm muncul
        nav.style.display='flex'
        state=true
    }
    else if(state==true){ //nav udh muncul
        nav.style.display='none'
        state=false
    }
}