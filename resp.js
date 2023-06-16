burger = document.querySelector('.burger')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-nav')
    navList.classList.toggle('v-nav')
})
