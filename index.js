let myLeads=[]
let olfLeads=[]


let inputEl=document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let deleteBtn=document.getElementById("delete-btn")
let tabBtn=document.getElementById("tab-btn")
const ulEl= document.getElementById("ul-el")

let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
   myLeads=leadsFromLocalStorage
   render(myLeads)

}

tabBtn.addEventListener("click" , function(){
    //chrome.tabs.query({active:true , currentWindow:true}, function(tabs){
  chrome.tabs.query({active:true , currentWindow:true }, function(tabs){
  
   myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
    render(myLeads)
  })
 })
deleteBtn.addEventListener("dblclick", function(){
   localStorage.clear()
   myLeads=[]
   render(myLeads)

})
inputBtn.addEventListener("click" , function(){
   
   myLeads.push(inputEl.value)
   inputEl.value=""
   localStorage.setItem("myLeads", JSON.stringify(myLeads))
   render(myLeads)

   })
function render(leads){
   let listItems= ""

   for (let i=0 ; i< leads.length ; i++){
      listItems+= `
      <li>
      <a target='_blank' href='${leads[i]}'>
      ${leads[i]} 
      </a>
      </li>
      `
      //  listItems+= "<li><a target='_blank' href='"+myLeads[i]+"'>" +myLeads[i] + "</a></li>"
   }
   ulEl.innerHTML=listItems
}

/*const li=document.createElement("li")
   li.textContent=myLeads[i]
   ulEl.append(li)*/
