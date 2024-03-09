const menuside= document.querySelector('#sidebar');
const micon= document.getElementById('menuicon');
const closemenu= document.getElementById('close');
micon.addEventListener( "click",() => {
    sidebar.style.right='0%'
    sidebar.style.transition='all 0.4s linear'
});
closemenu.addEventListener( "click",() => {
     sidebar.style.right='-70%'
    sidebar.style.transition='all 0.4s linear'
    sidebar.style.position='fixed'
});