let jokes=document.getElementById("joke");
let next=document.getElementById("btn");
GetJoke();
next.addEventListener("click",GetJoke);
 async function GetJoke(){
    const config={
        headers:{
            accept:'application/json',
        },
    }
    const res=await fetch('https://icanhazdadjoke.com/',config);
    var data=await res.json();
    jokes.innerHTML=data.joke;

   /* fetch('https://icanhazdadjoke.com/',config)
    .then((res)=>res.json())
    .then((data)=>{
        jokes.innerHTML=data.joke;
    })*/

}