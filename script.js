
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll =() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }else{
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

    // var data = window.location.search;
     //var params = new URLSearchParams(data);

     //console.log(params);

     //var tittle = params.get("tittle");
     //var page = params.get("page");

     //var tittle = tittle;
        // page = page;

     //document.getElementById("tittle").innerHTML = tittle;
     //document.getElementById("page").innerHTML = page;