let input=document.querySelector("input");
let add=document.querySelector(".add");
let ul=document.querySelector("ul");
let des=document.querySelector("textarea");
add.addEventListener("click",()=>{
let li=document.createElement("li");
li.innerText=input.value;

ul.appendChild(li);

let  del=document.createElement("button");
del.classList.add("del");
let  text=document.createElement("div");
text.innerText=des.value;
del.innerText="delete";
li.appendChild(del);
li.appendChild(text);

input.value="";
des.value="";
del.addEventListener("click",()=>{
    li.remove();
    })

})
