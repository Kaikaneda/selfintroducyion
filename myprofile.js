let border_spread_btn=document.getElementById("border_spread_btn");
border_spread_btn.addEventListener('click',function(){
    let name1=document.getElementById('title1');
    name1.textContent='1998年5月30日誕生現在21歳';
    name1.style.color="white"
   console.log(name1);
})

let title3=document.getElementById("title3");

title3.addEventListener('click',function(){
    let myphote3=document.getElementsByClassName("myphote3");
    console.log(myphote3[0]);
    
    myphote3[0].src = "new_suimin_man.jpg";
    let nikka2=document.getElementsByClassName('nikka2');
    console.log(nikka2);
    nikka2[0].textContent='お昼時の願望';
    nikka2[0].style.fontSize='300px';
    nikka2[0].style.color='yellow';
})
