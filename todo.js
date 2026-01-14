// let btn=document.querySelector("#btn")
// //document.getElementId("btn")
// TransformStream.addEventListner("click",additem)
// const additem=()=>{
//     //step1.read user input fromtextbox
//     let userinput=document.querySelector("#inp").
//     value
//     //step2.create list item
// let listitem=document.createElement("li")
// listitem.textcontent=userinput
// //step3.target the list
// let list=document.querySelector("#todo")
// //step4.dd item tothe list
// list.appendChild(listtitem)

// }
// let btn=customElements.querSelector("#btn")


let btn=document.querySelector("#btn")
// document.getElementById("btn")
const additem=()=>{
    //read user input from the user
    let userinput=document.querySelector("#inp").value
    //create list item
    let listitem=document.createElement("li")
    listitem.textContent=userinput
    //target the list
    let list=document.querySelector("#todo")
    //add item to the list
    list.appendChild(listitem)
    
}
btn.addEventListener("click",additem)