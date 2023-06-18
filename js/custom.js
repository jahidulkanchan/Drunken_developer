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
})