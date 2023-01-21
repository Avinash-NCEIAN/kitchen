navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    profile.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}

profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
    profile.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');

}

cart = document.querySelector('.header .flex .icons .box-1');

document.querySelector('#cart-1').onclick = () =>{
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
    profile.classList.remove('active');

}

search = document.querySelector('.header .flex .icons .box .search');

document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
    profile.classList.remove('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    profile.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}