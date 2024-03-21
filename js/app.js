var $ = document
var popup = $.querySelector('.popup');
var exitbtn = $.querySelector('.btn-danger');

exitbtn.addEventListener('click',()=>{
    popup.style.display='none';
})

var itemtree = $.querySelector('.item-tree')
var info = $.querySelector('.info')
itemtree.addEventListener('click', ()=>{
    info.classList.toggle('info1')
})




