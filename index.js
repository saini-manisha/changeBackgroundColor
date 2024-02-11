const container=document.querySelector(".container");
const btn=document.querySelector(".btn");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const first=`${Math.floor(Math.random()*10)}`;
    const second=`${Math.floor(Math.random()*10)}`;
    const third=`${Math.floor(Math.random()*10)}`;

    container.style.backgroundColor=`#${first}${second}${third}`
    //btn.style.backgroundColor=`#${Math.floor(Math.random()*10)}${first}${second}`
    //btn.style.backgroundColor="red"
    
    
    
})

