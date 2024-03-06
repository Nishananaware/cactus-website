const menuside= document.querySelector('#sidebar');
const micon= document.getElementById('menuicon');
const closemenu= document.getElementById('close');
micon.addEventListener( "click",() => {
    console.log("hello");
    sidebar.style.right='0%'
    sidebar.style.transition='all 0.4s linear'
});
closemenu.addEventListener( "click",() => {
    console.log("hello");
    sidebar.style.right='-30%'
    sidebar.style.transition='all 0.4s linear'
});