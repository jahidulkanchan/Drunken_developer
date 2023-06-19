// toggle nav bar
const toggleBar = document.getElementById('toggle-bar');
const menuBar = document.getElementById('top-menu')
toggleBar.addEventListener('click', function(){
  menuBar.classList.toggle('active')
})
document.addEventListener('click', (e)=>{
  if(e.target.id !== 'top-menu' && e.target.id !== 'toggle-bar'){
    menuBar.classList.remove('active')
  }
});
//scroll nav
const header = document.getElementById('header')
window.addEventListener('scroll',()=>{
if(scrollY > 200){
header.classList.add('active')
}
else{
  header.classList.remove('active')
}
})
// wow js
new WOW().init();