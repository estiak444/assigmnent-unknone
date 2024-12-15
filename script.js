let loadData=()=>{
    fetch("https://f24-1-mid-1.vercel.app/content")
        .then(res=>res.content())
        .then(data=>console.log(data))
}
const showData=(values)=>{
    const mainDiv=DocumentFragment.getElementById("container")
    for(const value of values){
        const{name,id,img,details}=value;
        const div=document.createElement('div')
        div.innerHTML=`
        <div class="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img class="j-[200] w-full"
      src=${image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${name}</h2>
    <p>${details}</p>
    <div class="card-actions justify-end">
      <button id=${name} class="btn btn-primary"on click='add'(${JSON.stringify(value)})>Add</button>
    </div>
  </div>
</div>
        `
        mainDiv.appendChild(div)
    }
}
const add=(clicked)=>{
    const{name,id,img,details}=clicked
    const changedId=name.split('')[0]
    const ol=document.getElementById('order')
    const li=document.creatElement ('li')
    const custom= document.getElementById(changedId)
    console.log(custom)
    custom.disabled=true
    li.style.marginTop="40px"
    li.innerHTML=`
    <div clas="flex justify-between">
    <h1 class="flex-bold text-xl">${name}</h1>
    <img class="h-[50px] w-[80px] src=${img}/>
    </div>
    `
    ol.appendChild(li)
}
loadData()
 

let modeBtn=document.querySelector("#mode");
let currMode="light";
modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundcolor="black";

    }else{
        currMode="light";
        document.querySelector("body").style.backgroundcolor="whoite";
    }
    console.log(currMode)
})