const btt = document.getElementById("btt");
const modal = document.getElementById("modal");
var ind = true;
btt.onclick = function(){
    if(ind == true){
    modal.style.display = 'block';
    btt.removeAttribute('class' , 'fas fa-bars');
    btt.setAttribute('class' ,'fas fa-times');
    ind = false;
    }
    else{
        modal.style.display = 'none';
        btt.removeAttribute('class' ,'fas fa-times');
        btt.setAttribute('class' , 'fas fa-bars');
        ind = true;
    }
}